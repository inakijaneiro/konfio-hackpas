let express = require('express');
let app = express();
let cors = require('cors');
var mongoose = require('mongoose');
const credentials = require("../private/mongoPass");

//Models

let Company = require("./models/Company");


mongoose.connect(`mongodb://${credentials.dbUserName}:${credentials.dbPassword}@ds019482.mlab.com:19482/hackpas`, { useNewUrlParser: true });
mongoose.connection.once('open', function () {
    // All OK - fire (emit) a ready event. 
    deleteCompanies();
});
let convertCSVtoJSON = require('./src/CSVToJSON/index');

let csvFiles = ["Person1.csv", "Person2.csv", "Person3.csv"];

app.use(cors()); //Allows localhost

app.get('/', function (req, res) {

    Company.find().distinct("rfc", function (err, companies) {
        if (err) {
            res.status(400);
            res.send('None shall pass');
        } else {
            res.json(companies);
        }
    })
});

app.get("/:rfc/salud/", function (req, res) {

    let data = {
        income: 0,
        outcome: 0,
        maxIncome: 0,
        maxOutcome: 0,
        top5: []
    }
    try {
        queryFirstDashboard(data, res, req);
    } catch (e) {
        res.send("There was an error getting the data")
    }


})

app.get("/:rfc/historial/", function (req, res) {

    let data = {
        firstYearIncomes: [],
        firstYearOutcomes: []
    }
    try {
        queryGraph(data, res, req);
    } catch (e) {
        res.send("There was an error getting the data")
    }


})


app.on('ready', function () {
    app.listen(3001, function () {
        console.log("API Running on port 3001");
    });
});


function loadCSVFiles() {
    let itemsProcessed = 0;
    csvFiles.forEach(csvFile => {
        convertCSVtoJSON(csvFile).catch(err => {
            console.log(`Could not convert CSV ${csvFile} to JSON`);
        }).then(JSONFile => {
            itemsProcessed++;
            generateCompanies(JSONFile, itemsProcessed, csvFiles.length);
        });
    })
}

function deleteCompanies() {
    Company.deleteMany({}, (err, succ) => {
        if (err) return console.log(err);
        console.log("Deleted companies from Database!");
        loadCSVFiles();
    })
}
function generateCompanies(JSONFile, items, length) {

    Company.collection.insertMany(JSONFile, (err, succ) => {
        if (err) {
            return console.log(err);
        }
        console.log("Added data to the database");

        if (items === length) {
            app.emit('ready');
        }
    });
}

function queryFirstDashboard(data, res, req) {

    let rfcFromParam = req.params.rfc;

    Company.aggregate([{
        $match: { $and: [{ rfc: rfcFromParam }, { receptorrfc: rfcFromParam }] },
    },
    {
        $group: {
            _id: null,
            total: {
                $sum: "$total"
            },
            max: {
                $max: "$total"
            }
        }
    }], (err, doc) => {
        if (err) {
            res.status(400);
            res.send('None shall pass');
        } else {
            if (doc[0]) {
                data.income = doc[0].total;

                data.maxIncome = doc[0].max;
            }
            Company.aggregate([{
                $match: { $and: [{ rfc: rfcFromParam }, { emisorrfc: rfcFromParam }] },
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: "$total"
                    },
                    max: {
                        $max: "$total"
                    }
                }
            }], (err, doc) => {
                if (err) {
                    res.status(400);
                    res.send('None shall pass');
                } else {
                    if (doc[0]) {
                        data.outcome = doc[0].total;
                        data.maxOutcome = doc[0].max;
                    }
                    Company.aggregate([{
                        $match: { $and: [{ rfc: rfcFromParam }, { emisorrfc: rfcFromParam }] },
                    },
                    {
                        $project:
                        {
                            "_id": 0,
                            "receptorrfc": 1,
                            total: { $sum: "$total" }
                        }
                    },
                    // Sorting pipeline
                    { "$sort": { "total": -1 } },
                    // Optionally limit results
                    { "$limit": 5 }
                    ], (err, doc) => {
                        if (err) return console.log(err);
                        if (doc[0]) {
                            data.top5.push(doc)
                        }
                        res.json(data);
                    });
                }
            })
        }
    })
}

function queryGraph(data, res, req) {

    let rfcFromParam = req.params.rfc;
    Company.aggregate([{
        $match: { $and: [{ rfc: rfcFromParam }, { receptorrfc: rfcFromParam }] },
    },
    { $project: { "_id": 0, "income": "$total", "date": 1 } }
    ], (err, docs) => {
        if (err) return console.log(err);
        docs.forEach(doc => {
            data.firstYearIncomes.push(doc);
        })
        Company.aggregate([{
            $match: { $and: [{ rfc: rfcFromParam }, { emisorrfc: rfcFromParam }] },
        },
        { $project: { "_id": 0, "outcome": "$total", "date": 1 } }
        ], (err, docs) => {
            if (err) return console.log(err);
            docs.forEach(doc => {
                data.firstYearOutcomes.push(doc);
            })
            res.json(data);
        })
    })
}
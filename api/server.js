let express = require('express');
let app = express();
let cors = require('cors');
var mongoose = require('mongoose');
const credentials = require("../private/mongoPass");
let generateCompanies = require("./src/generateCompanies/index")

//Models

let Company = require("./models/Company");


mongoose.connect(`mongodb://${credentials.dbUserName}:${credentials.dbPassword}@ds019482.mlab.com:19482/hackpas`, {useNewUrlParser: true});

let convertCSVtoJSON = require('./src/CSVToJSON/index');

let csvFiles = ["Person1.csv", "Person2.csv", "Person3.csv"];

app.use(cors()); //Allows localhost

app.get('/', function (req, res) {
    Company.find().distinct("rfc", function(err, companies){
        if(err){
            res.status(400);
            res.send('None shall pass');
        } else{
            res.json(companies);
        }
    })
});

//TODO: Fix concurrency, it doesnt work when companies havent fully loaded
app.get("/:rfc/salud/", function (req, res){
    let rfcFromParam = req.params.rfc;
    console.log(rfcFromParam);
    
    let data = {
        income: 0,
        outcome: 0
    }

    Company.aggregate([{
        $match : { $and : [ {rfc: rfcFromParam}, {receptorrfc: rfcFromParam }] },
    },
    {
        $group : {
            _id : null,
            total: {
                $sum : "$total"
            }
        }
    }], (err, doc) =>{
        if (err) {
        res.status(400);
        res.send('None shall pass');
        } else {
            data.income = doc[0].total;
        }
    }).then(Company.aggregate([{
        $match : { $and : [ {rfc: rfcFromParam}, {emisorrfc: rfcFromParam }] },
    },
    {
        $group : {
            _id : null,
            total : {
                $sum : "$total"
            }
        }
    }], (err, doc) =>{
        if (err) {
        res.status(400);
        res.send('None shall pass');
        } else {
            data.outcome = doc[0].total;
        }
    })).then( _ => {
        res.send(data);
    })
    

})



app.listen(3001, function () {
  console.log('API Running on port 3001');
  loadCSVFiles();
  deleteCompanies();
});


function loadCSVFiles() {
    csvFiles.forEach(csvFile => {
        convertCSVtoJSON(csvFile).catch(err => {
            console.log(`Could not convert CSV ${csvFile} to JSON`);
        }).then(JSONFile => {
            generateCompanies(JSONFile);
        });
    })
}

function deleteCompanies() {
    Company.deleteMany({}, (err, succ) => {
        if (err) return console.log(err);
        console.log("Deleted companies from Database!");  
    })
}
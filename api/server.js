let express = require('express');
let app = express();
var mongoose = require('mongoose');
const credentials = require("../private/mongoPass");
let generateFakeData = require("./src/generateFakeData/index")

//Models

let Company = require("./models/Company");


mongoose.connect(`mongodb://${credentials.dbUserName}:${credentials.dbPassword}@ds019482.mlab.com:19482/hackpas`, {useNewUrlParser: true});

let convertCSVtoJSON = require('./src/CSVToJSON/index');

let csvFiles = ["Person1.csv", "Person2.csv", "Person3.csv"];

app.get('/', function (req, res) {
    res.send("Welcome!")
})

app.post('/', function (req, res) {
    Company.find().distinct("rfc", function(err, companies){
        if(err){
          console.log(err);
        } else{
            res.send(companies)
        }
    })
});

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
            generateFakeData(JSONFile);
        });
    })
}

function deleteCompanies() {
    Company.deleteMany({}, (err, succ) => {
        if (err) return console.log(err);
        console.log("Deleted companies from Database!");  
    })
}
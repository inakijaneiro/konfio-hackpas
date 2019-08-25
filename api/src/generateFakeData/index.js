let Company = require("../../models/Company");


function generateFakeData(JSONFile) {
    
    Company.collection.insertMany(JSONFile, function(err,data) {
        if(err) return console.log(err);
    })
}

module.exports = generateFakeData;

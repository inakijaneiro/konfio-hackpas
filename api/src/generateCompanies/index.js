let Company = require("../../models/Company");


function generateCompanies(JSONFile) {
    
    Company.collection.insertMany(JSONFile).then(console.log("Companies Loaded"));
}

module.exports = generateCompanies;

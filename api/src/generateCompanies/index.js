let Company = require("../../models/Company");


function generateCompanies(JSONFile) {
    
    Company.collection.insertMany(JSONFile, (err, succ)  => {
        if (err) {
            return console.log(err);
        }
        
    });
}

module.exports = generateCompanies;

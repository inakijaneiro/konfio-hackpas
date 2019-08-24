const csv=require('csvtojson')
const fs = require("fs");

module.exports = async function convertCSVtoJSON(csvFilePath) {
    csvFilePath = `api/data/${csvFilePath}`;
    
    // Async / await usage
    return await csv().fromFile(csvFilePath);
}



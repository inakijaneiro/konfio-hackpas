const mongoose = require("mongoose");

let CompanySchema = new mongoose.Schema({
    name: String
  });

let Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
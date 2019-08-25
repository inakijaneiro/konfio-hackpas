const mongoose = require("mongoose");

let CompanySchema = new mongoose.Schema({
    rfc: String,
    uuid: String,
    ccyisocode: String,
    ccyfx: Number,
    paymentmethod: Number,
    paymenttype: String,
    subtotal: String,
    total: String,
    placegenerated: Number,
    date: Date,
    receptorrfc: String,
    receptorname: String,
    emisorrfc: String,
    emisorname: String,
    status: String,
    productid: Number,
    quantity: Number,
    cost: String
  });

let Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
const mongoose = require("mongoose");

let CompanySchema = new mongoose.Schema({
    rfc: String,
    uuid: String,
    ccyisocode: String,
    ccyfx: Number,
    paymentmethod: Number,
    paymenttype: String,
    subtotal: Number,
    total: Number,
    placegenerated: Number,
    date: Date,
    receptorrfc: String,
    receptorname: String,
    emisorrfc: String,
    emisorname: String,
    status: String,
    productid: Number,
    quantity: Number,
    cost: Number
  });

let Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
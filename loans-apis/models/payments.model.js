const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    emailAddress : String,
    phoneNumber : Number,
    creditcardNumber:String,
    creditcardexpiry:Date,
    paymentmethod:String



});

const paymentsModel = mongoose.model('Payments',paymentSchema);

module.exports = paymentsModel;
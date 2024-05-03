const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    emailAddress : String,
    phoneNumber : Number,
    dob: String,
    department:String
    

},
{ collection: 'customers', strict: false });

const customerModel = mongoose.model('Customers',customerSchema);

module.exports = customerModel;
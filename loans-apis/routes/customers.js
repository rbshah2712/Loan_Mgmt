var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const customerModel = require('../models/customers.model');

/* GET customers listing. */
router.get('/list', async function(req, res, next) {
  try {
    const customers = await customerModel.find();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});



/* GET specific customers listing. */
router.get('/view', async function(req, res, next) {
  const customerId = req.query.customerId;
  try {
    const customer = await customerModel.findById(customerId);

    res.status(200).json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

/* POST customers listing.*/ 
router.post('/add', async (req, res) => {

      let firstName = req.body.firstName;
      let lastName = req.body.lastName;
      let emailAddress = req.body.emailAddress;
      let phoneNumber = req.body.phoneNumber;
      let dob = req.body.dob;
      let department = req.body.department;


  try {

      const customerObj = new customerModel({
      firstName :firstName,
      lastName : lastName,
      emailAddress : emailAddress,
      phoneNumber : phoneNumber,
      dob: dob,
      department:department
  
    });
    const savedCustomer = await customerObj.save();
    res.status(200).json({status:"Success","data":savedCustomer});
  
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


/* PUT users listing. */
router.put('/update', async (req, res) =>{
  
    const customerId = req.body.customerId;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailAddress = req.body.emailAddress;
    let phoneNumber = req.body.phoneNumber;
    let dob = req.body.dob;
    let department = req.body.department;
  
    const customerObj = {
      firstName :firstName,
      lastName : lastName,
      emailAddress : emailAddress,
      phoneNumber : phoneNumber,
      dob: dob,
      department:department
    };


   
    try {
      const updatedCustomer = await customerModel.findByIdAndUpdate(customerId,customerObj, { new: true }, { upsert: true });
      res.status(200).json({status:"Success","data":updatedCustomer});
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
}); 
 


/* DELETE users listing. */
router.delete('/delete', async function(req, res, next) {
  const customerId = req.query.customerId;

  try {
    const deletedCustomer = await customerModel.findByIdAndDelete(customerId);
    res.status(200).json({status:"Success",message:"Customer Deleted Successfully"});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
 
});



/* DELETE multiple customers listing. */
router.delete('/delete-multiple', async function(req, res, next) {
  const customerId = req.query.customerId;

  try {
    const deletedCustomer = await customerModel.deleteMany({'firstName' : 'Mark'});
    res.status(200).json({status:"Success",message:"Customer Deleted Successfully"});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
 
});

/* SEARCH users listing. */
router.search('/search', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;

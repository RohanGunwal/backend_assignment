const Customer = require("../models/customerModel.js");

const createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    await newCustomer.save();
    res.status(200).json(newCustomer);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json(customers);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findById(id);
    res.status(200).json(customer);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createCustomer,
  getCustomer,
  getCustomers,
};

const Inventory = require("../models/inventoryModel.js");

const createInventory = async (req, res) => {
  try {
    const newInventory = await Inventory.create(req.body);
    await newInventory.save();
    res.status(200).json(newInventory);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find({});
    res.status(200).json(inventory);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getInventoryType = async (req, res) => {
  const type = req.params.id;
  try {
    const inventory = await Inventory.find({ inventoryType: type });
    res.status(200).json(inventory);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateQuantity = async (req, res) => {
  console.log(req.params);
};

module.exports = {
  createInventory,
  getInventory,
  getInventoryType,
  updateQuantity,
};

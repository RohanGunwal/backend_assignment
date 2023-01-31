const Order = require("../models/orderModel.js");
const Inventory = require("../models/inventoryModel.js");

const createOrder = async (req, res) => {
  const { inventoryId } = req.body;
  try {
    const inventoryItem = await Inventory.findById(inventoryId);
    if (inventoryItem.quantity == 0) throw new Error("ITEMS OUT OF STOCK");
    const newQuantity = inventoryItem?.quantity - req.body.quantity;
    if (newQuantity < 0)
      throw new Error(
        `Only ${inventoryItem.quantity} ${inventoryItem.itemName}(s) Remaining`
      );
    await Inventory.findByIdAndUpdate(inventoryId, {
      quantity: newQuantity,
    });
    const newOrder = await Order.create(req.body);
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createOrder,
  getOrders,
};

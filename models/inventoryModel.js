const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    inventoryType: { type: String, required: true },
    itemName: { type: String, unique: true, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const InventoryModel = new mongoose.model("Inventory", InventorySchema);

module.exports = InventoryModel;

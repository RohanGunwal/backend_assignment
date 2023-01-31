const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    inventoryId: { type: mongoose.Schema.Types.ObjectId, ref: "inventories" },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customers" },
  },
  { timestamps: true }
);

const OrderModel = new mongoose.model("Orders", OrderSchema);

module.exports = OrderModel;

const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);

const CustomerModel = new mongoose.model("Customer", CustomerSchema);

module.exports = CustomerModel;

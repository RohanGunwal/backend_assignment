const router = require("express").Router();
const inventoryController = require("../controllers/InventoryController.js");
const customerController = require("../controllers/customerController.js");
const orderController = require("../controllers/orderController.js");

// Orders
router.post("/createOrder", orderController.createOrder);
router.get("/orders", orderController.getOrders);

// Inventory
router.post("/createInventory", inventoryController.createInventory);
router.get("/inventory", inventoryController.getInventory);
router.get("/inventory/:id", inventoryController.getInventoryType);

// Customer
router.post("/createCustomer", customerController.createCustomer);
router.get("/customers", customerController.getCustomers);
router.get("/customer/:id", customerController.getCustomer);

module.exports = router;

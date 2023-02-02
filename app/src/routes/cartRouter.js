const express = require("express");
const router = express.Router();

// controller
const controller = require("../controllers/cartController.js")

// route
router.get("/",controller.cart)

module.exports = router;
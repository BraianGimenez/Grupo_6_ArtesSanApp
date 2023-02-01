const express = require("express");
const router = express.Router();

// controller
const controller = require("../controllers/productController")

// route
router.get("/" , controller.all)
router.get("/detail" , controller.detail)

module.exports = router;
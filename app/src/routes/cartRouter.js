const express = require("express");
const router = express.Router();

// controller
const controller = require("../controllers/cartController.js")

// middlewares
const checkSession = require("../middlewares/checkUserInSession");

// route
router.get("/",checkSession,controller.cart)

module.exports = router;
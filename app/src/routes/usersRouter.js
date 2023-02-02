const express = require("express");
const router = express.Router();

// controller
const controller = require("../controllers/usersController")

// route
router.get("/login" , controller.login)
router.get("/register" , controller.register)

module.exports = router;
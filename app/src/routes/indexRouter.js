const express = require("express");
const router = express.Router();

// controller
const controller = require("../controllers/indexController")

// route
router.get("/" , controller.index);
router.get("/about" , controller.about);

module.exports = router;
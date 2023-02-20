const express = require("express");
const indexController = require("../controllers/indexController");
const router = express.Router();

// controller
const controller = require("../controllers/indexController")

// route
router.get("/" , indexController.index);
router.get("/about" , indexController.about);

module.exports = router;
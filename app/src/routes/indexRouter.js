const express = require("express");
const indexController = require("../controllers/indexController");
const router = express.Router();

// route
router.get("/" , indexController.index);
router.get("/about" , indexController.about);
//search
router.get("/search", indexController.search)

module.exports = router;
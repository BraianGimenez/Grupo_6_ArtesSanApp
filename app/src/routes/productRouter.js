const express = require("express");
const router = express.Router();

// controller
const controller = require("../controllers/productController")

// route
router.get("/" , controller.all)
router.get("/detail" , controller.detail)

// create
router.get("/create",controller.create)
router.post("/create",controller.storage)

// edit
router.get("/edit", controller.edit)

module.exports = router;
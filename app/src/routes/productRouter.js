const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// controller
const controller = require("../controllers/productController")

// route

//detail
router.get("/" , controller.all)
router.get("/detail" , productController.detail)
router.get("/detail/:id" , productController.detail)

// create
router.get("/create",controller.create)
router.post("/create",controller.storage)

// edit
router.get("/edit", controller.edit)

module.exports = router;
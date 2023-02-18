const express = require("express");
const router = express.Router();

// controller
const controller = require("../controllers/productController");
const { uploadImageProduct } = require("../middlewares/upload");

// route
router.get("/" , controller.all)
router.get("/detail" , controller.detail)

// create
router.get("/create",controller.create)
router.post("/create",uploadImageProduct.single("image"),controller.storage)

// edit
router.get("/edit/:id", controller.edit)
router.put("/edit/:id",uploadImageProduct.single("image"), controller.update)

module.exports = router;
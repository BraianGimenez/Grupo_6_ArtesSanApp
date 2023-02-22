const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// controller
const controller = require("../controllers/productController");
const { uploadImageProduct } = require("../middlewares/upload");

// route

//detail
router.get("/" , productController.all)
router.get("/detail/" , productController.detail)
router.get("/detail/:id" , productController.detail)



// create
router.get("/create",controller.create)
router.post("/create",uploadImageProduct.single("image"),controller.storage)

// edit
router.get("/edit/:id", controller.edit)
router.put("/edit/:id",uploadImageProduct.single("image"), controller.update)

//delete
//.delete('/delete/:id',remove)


module.exports = router;
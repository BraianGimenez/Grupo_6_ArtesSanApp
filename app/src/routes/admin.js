const express = require("express");
const router = express.Router();

const {index, products, productsDetail, productEdit, productDelete, productsAdd, productsStore} = require("../controllers/adminController");
const checkAdmin = require("../middlewares/checkAdmin");
const { uploadImageProduct } = require("../middlewares/upload");
// get index

router.get("/", checkAdmin,index);

// get products
router.get("/products",checkAdmin, products);

// create products
router.get("/products/add",checkAdmin, productsAdd)
router.post("/products/add", uploadImageProduct.single("image"),checkAdmin,productsStore)

// edit products
router.get("/products/detail/:id",checkAdmin, productsDetail);
router.put("/products/detail/edit/:id",uploadImageProduct.single("image"),checkAdmin,productEdit);

router.delete("/products/delete/:id",checkAdmin, productDelete)
module.exports = router;
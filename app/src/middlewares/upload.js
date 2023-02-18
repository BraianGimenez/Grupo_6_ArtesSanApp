const multer = require("multer");
const path = require("path");

const storeImageProduct = multer.diskStorage({
    destination: (req,file,cb) => {
        return cb(null, "public/images/products")
    },
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});

const uploadImageProduct = multer({
    storage: storeImageProduct
});

module.exports = {
    uploadImageProduct
}
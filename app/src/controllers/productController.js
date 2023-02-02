const fs = require("fs");
const path = require("path");

module.exports = {
    all: (req,res) => {
        res.send("aca van todos los productos")
    },
    detail: (req, res) => {
        res.render("productDetail")
    },
    
}
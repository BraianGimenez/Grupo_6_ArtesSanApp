const fs = require("fs");
const path = require("path");

module.exports = {
    all: (req,res) => {
        res.render("product")
    },
    detail: (req, res) => {
        res.render("productDetail")
    },
    edit: (req,res) => {
        res.render("product-edit")
    }
    
}
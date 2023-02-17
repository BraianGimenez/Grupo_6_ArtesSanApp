const fs = require("fs");
const {readJSON, writeJSON} = require("../database")

module.exports = {
    all: (req,res) => {

        let database = readJSON("products.json")
        res.render("products",{
            database
        })
    },
    detail: (req, res) => {
        res.render("productDetail")
    },
    create:(req,res) => {
        res.render("product-create")
    },
    storage:(req,res) => {
        let data = req.body;

        let newProduct = {
            id:1,
            name:data.name,
            description:data.description,
            image:"",
            category:data.category,
            color:data.color,
            price:data.price,
        }

        let database = readJSON("products.json")

        database.push(newProduct)

        writeJSON("products.json",database)
        res.redirect("/products")
    },
    edit: (req,res) => {
        res.render("product-edit")
    }
    
}
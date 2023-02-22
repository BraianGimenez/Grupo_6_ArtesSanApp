const fs = require("fs");
const {readJSON, writeJSON} = require("../database")
const path = require('path');


module.exports = {
    all: (req,res) => {

        let database = readJSON("products.json")
        res.render("products",{
            database
        })
    },
    detail: (req, res) => {
        const products = readJSON("products.json");
    
        const product = products.find((product) => product.id === +req.params.id);
    
        return res.render("productDetail", {
          ...product,
        });
    },

    create:(req,res) => {
        res.render("product-create")
    },
    storage:(req,res) => {
        let data = req.body;
        let database = readJSON("products.json")

        let newProduct = {
            id:database.length ? database[database.length - 1].id + 1 : 1,
            name:data.name,
            description:data.description,
            image: req.file ? req.file.filename : "placeholder.png",
            category:data.category,
            color:data.color,
            price:data.price,
        }

        database.push(newProduct)

        writeJSON("products.json",database)
        res.redirect("/products")
    },
    edit: (req,res) => {

        let database = readJSON("products.json")

        let ID = +req.params.id;

        let product = database.find(x => x.id === ID)

        res.render("product-edit", {
            ...product
        })
    },
    update:(req,res) => {
         let id = +req.params.id;
        const database = readJSON("products.json")

        const {name, description,category,color,price} = req.body

        database.map(x => {
            if(id === x.id){
                x.name = name;
				x.description = description;
				x.image = req.file ? req.file.filename : x.image
				x.category = category;
				x.color = color;
				x.price = price;
            } 
        });
        writeJSON("products.json", database);

        res.redirect("/products") 
    },
    // DELETE
	destroy : (req, res) => {

		let productId = Number(req.params.id);
        const database = readJSON("products.json")

		database.forEach( product => {
			if(product.id === productId){
				let productToDestroy = database.indexOf(product);
				database.splice(productToDestroy, 1)
			}
		});
		
		writeJSON("products.json", database);

		res.redirect("/products");
	
	},

    
}
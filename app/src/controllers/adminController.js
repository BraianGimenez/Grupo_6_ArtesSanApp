const {readJSON,writeJSON} = require("../database");
const {validationResult} = require("express-validator");

module.exports = {
    index:(req,res) => {
        let userDB = readJSON("users.json");

        let productsDB = readJSON("products.json");
        res.render("adminIndex",{
            userDB,
            productsDB,
            session:req.session
        })
    },
    products:(req,res) => {
        let productsDB = readJSON("products.json");

        res.render("adminProducts", {
            productsDB
        })
    },
    productsAdd: (req,res) => {
        res.render("adminCreate",{
            session:req.session
        })
    },
    productsStore:(req,res) => {
        const {name, description,category,color,price} = req.body
        let database = readJSON("products.json")

        let newProduct = {
            id:database.length ? database[database.length - 1].id + 1 : 1,
            name:name,
            description:description,
            image: req.file ? req.file.filename : "placeholder.png",
            category:category,
            color:color,
            price:price,
        }

        database.push(newProduct)

        writeJSON("products.json",database)
        res.redirect("/admin/products")
    },
    productsDetail: (req,res) => {
        let id = +req.params.id
        let productsDB = readJSON("products.json");

        let productFound = productsDB.find(x => x.id === id);

        res.render("adminDetail", {
            product: productFound,
            session:req.session
        })
    },
    productEdit:(req,res) => {
        let id = +req.params.id;
        const database = readJSON("products.json");

        const {name, description,category,color,price} = req.body

        let mas = database.map(x => {
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

        res.redirect("/admin/products") 
    },
    productDelete:(req,res) => {
        const userId = req.params.id;
        let userDB = readJSON("products.json");

        let user = userDB.find(user => user.id === userId);

        userDB.pop(user);

        writeJSON("products.json", userDB);

        res.redirect("/admin/products")
    },
    loggedOut:(req,res) => {
        req.session.destroy();
        if(req.cookies.userArtesanApp){
            res.cookie("userArtesanApp","",{maxAge:-1})
        }
        res.redirect("/")
    },
}
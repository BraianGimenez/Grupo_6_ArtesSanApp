const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    index: (req, res) => {
        let antiguedades = products.filter(product => {
            return product.category == "antigüedades"
        });
        let zapatos = products.filter(product => {
            return product.category == "zapatos"
        });
        res.render("index", {
            antiguedades , zapatos
        })
    },
    about: (req, res) => {
        res.redirect("/nosotros")
    }
}
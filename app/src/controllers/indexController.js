const fs = require("fs");
const path = require("path");

module.exports = {
    index: (req, res) => {
        res.render("index")
    },
    about: (req, res) => {
        res.render("nosotros")
    }
}
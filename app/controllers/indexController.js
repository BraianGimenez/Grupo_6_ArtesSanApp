const fs = require("fs");
const path = require("path");

module.exports = {
    index: (req, res) => {
        return res.sendFile(path.join(__dirname, "../views/index.html"))
    },
    about: (req, res) => {
        return res.sendFile(path.join(__dirname, "../views/nosotros.html"))
    }
}
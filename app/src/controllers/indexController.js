const fs = require("fs");
const path = require("path");

module.exports = {
    index: (req, res) => {
        return res.sendFile(path.join(__dirname, "../views/users/index.html"))
    },
    about: (req, res) => {
        return res.sendFile(path.join(__dirname, "../views/users/nosotros.html"))
    }
}
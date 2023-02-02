const fs = require("fs");
const path = require("path");

module.exports = {
    register: (req, res) => {
        res.render("register")
    },
    login: (req, res) => {
        res.render("login")
    }
}
const path = require("path");

module.exports = {
    cart: (req, res) => {
        res.render("productCart",{
            session: req.session
        })
    },
}
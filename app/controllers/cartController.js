const path = require("path");

module.exports = {
    cart: (req, res) => {
        return res.sendFile(path.join(__dirname, "../views/productCart.html"))
    },
}
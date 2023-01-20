const express = require("express");
const app = express()
const path = require("path")
const PORT = 3030;

app.use(express.static("public"));

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/index.html"))
})
app.get("/productCart", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/productCart.html"))
})
app.get("/productDetail", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/productDetail.html"))
})
app.get("/register", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get("/login", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get("/about", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/nosotros.html"))
})

app.listen(PORT, () => console.log(`servidor levantando en puerto : ${PORT}\n http://localhost:${PORT}`))
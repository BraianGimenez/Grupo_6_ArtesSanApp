const express = require("express");
const app = express()
const path = require("path")
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/index.html"))
})
app.get("/cart", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/cart.html"))
})

app.listen(PORT, () => console.log(`servidor levantando en puerto : ${PORT}\n http://localhost:${PORT}`))
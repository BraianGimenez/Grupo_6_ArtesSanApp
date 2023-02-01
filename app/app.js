const express = require("express");
const app = express();
const PORT = 3030;

// public
app.use(express.static("public"));

// routers
const indexRouter = require("./routes/indexRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
const cartRouter = require("./routes/cartRouter");

// views
app.use("/", indexRouter);
app.use("/productCart", cartRouter);
app.use("/product", productRouter);
app.use("/user", usersRouter);



// port
app.listen(PORT, () => console.log(`servidor levantando en puerto : ${PORT}\n http://localhost:${PORT}`))
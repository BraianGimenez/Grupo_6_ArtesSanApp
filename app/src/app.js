const express = require("express");
const app = express();
const PORT = 3030;
const methodOverride = require("method-override");

//Template engines
app.set("view engine","ejs")
app.set("views", ["./src/views", "./src/views/users" ,"./src/views/products"]);

// public
app.use(express.static("public"));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// routers
const indexRouter = require("./routes/indexRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
const cartRouter = require("./routes/cartRouter");

// views
app.use("/", indexRouter);
app.use("/productCart", cartRouter);
app.use("/products", productRouter);
app.use("/results", indexRouter);
app.use("/user", usersRouter);

// ejs engine

app.set("view engine", "ejs");


// port
app.listen(PORT, () => console.log(`servidor levantando en puerto : ${PORT}\n http://localhost:${PORT}`))
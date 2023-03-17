const express = require("express");
const app = express();
const PORT = 3030;
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cookies = require("./middlewares/cookies");

//Template engines
app.set("view engine","ejs")
app.set("views", ["./src/views", "./src/views/users" ,"./src/views/products","./src/views/admin"]);

// public
app.use(express.static("public"));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(session({
    secret: "ArtesanApp",
    resave: false,
    saveUninitialized:true
}))
app.use(cookieParser());
app.use(cookies);

// routers
const indexRouter = require("./routes/indexRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
const cartRouter = require("./routes/cartRouter");
const adminRouter = require("./routes/admin");


// views
app.use("/", indexRouter);
app.use("/productCart", cartRouter);
app.use("/products", productRouter);
app.use("/results", indexRouter);
app.use("/user", usersRouter);
app.use("/admin", adminRouter);

// port
app.listen(PORT, () => console.log(`servidor levantando en puerto : ${PORT}\n http://localhost:${PORT}`))
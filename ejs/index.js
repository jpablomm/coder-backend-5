const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const axios = require("axios");

// HANDLEBARS SETUP
// -----------------------------------------------------------------------
app.set("view engine", "ejs");
// app.engine(
//   "handlebars",
//   handlebars.engine({
//     layoutsDir: __dirname + "/views/layouts",
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ROUTER SET UP
// -----------------------------------------------------------------------
// GET -> Return all products
app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/productos", (req, res) => {
  const productos = [];
  axios.get("http://localhost:8080/api/productos").then((data) => {
    console.log(data.data);
    res.render("pages/products", { products: data.data });
  });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});

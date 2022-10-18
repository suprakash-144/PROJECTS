const express = require("express");
const app = express();
const bodyparser = require("body-parser");

// const urlencoder = bodyparser.urlencoded();
// body-parser deprecated undefined extended: provide extended option

const urlencoder = bodyparser.urlencoded({ extended: true });
app.use("/assest", express.static("assest"));
app.set("view engine", "ejs");
app
  .get("/", (req, res) => {
    res.render("home", { name: "suprakash" });
  })
  .post("/login", urlencoder, (req, res) => {
    console.warn(req.body.Name);
    res.render("home", { name: "suprakash" });
  })
  .get("/login", (req, res) => {
    res.render("login");
  })

  .listen(3000, "localhost", () => {
    console.warn("Running");
  });

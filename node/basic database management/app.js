const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
var urlencodedParser = bodyparser.urlencoded({ extended: false });
const students = require("./public/students");

app.set("view engine", "ejs");
mongoose.connect(
  "mongodb+srv://suprakashgorai14:xOdZX0B35dVBtbYj@cluster0.behnepu.mongodb.net/learing?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/", (req, res) => {
  students.find({}, function (err, list) {
    if (err) console.warn(err);
    // console.log(list);
    res.render("home", { Title: "Home", data: list, succes: false });
  });
});

app.post("/", urlencodedParser, (req, res) => {
  let newentry = new students({
    _id: new mongoose.Types.ObjectId(),
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  newentry.save((data) => {
    console.log(data);
  });

  students.find({}, function (err, list) {
    if (err) console.warn(err);
    // console.log(list);
    res.render("home", { Title: "Home", data: list, succes: true });
  });
});
app.get("/update", (req, res) => {
  res.render("update", { Title: "Updated page", data: data });
});
app.get("/delete", (req, res) => {
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("Server is running");
});

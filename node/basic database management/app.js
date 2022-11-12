const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
var urlencodedParser = bodyparser.urlencoded({ extended: false });
const students = require("./public/students");

app.use(express.static("public"));
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
  newentry.save().then(() => {
    students.find({}, function (err, list) {
      if (err) console.warn(err);
      // console.log(list);
      res.render("home", { Title: "Home", data: list, succes: true });
    });
  });
});

// update methods

app.get("/update/:id", (req, res) => {
  students.findById(req.params.id, (err, data) => {
    res.render("update", { Title: "Updated page", data: data });
  });
});

app.post("/update/", urlencodedParser, (req, res) => {
  var update = students.findByIdAndUpdate(req.body.id, {
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  update.exec((err, data) => {
    if (err) throw err;

    res.redirect("/");
  });
});

// delete methods

app.get("/delete/:id", (req, res) => {
  var del = students.findByIdAndDelete(req.params.id);
  del.exec((err, data) => {
    if (err) throw err;
    res.redirect("/");
  });
});

// search and filter methods

app.post("/search/", urlencodedParser, (req, res) => {
  var filname = new RegExp(req.body.Name, "i");
  var filemail = new RegExp(req.body.Email, "i");
  if (filemail != "" && filname != "") {
    var parameter = { $and: [{ Name: filname }, { Email: filemail }] };
  } else if (filemail != "" && filname == "") {
    var parameter = { Email: filemail };
  } else if (filemail == "" && filname != "") {
    var parameter = { Name: filname };
  } else {
    var parameter = {};
  }
  students.find(parameter, function (err, list) {
    if (err) console.warn(err);
    // console.log(list);
    res.render("home", { Title: "Home", data: list, succes: false });
  });
});
app.listen(3000, () => {
  console.log("Server is running");
});

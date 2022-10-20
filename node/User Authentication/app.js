const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
var jsonparser = bodyparser.json();

//
const crypto = require("crypto");
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

//
const jwt = require("jsonwebtoken");
var jwtkey = "jwt";

const User = require("./user");
mongoose
  .connect(
    "mongodb+srv://suprakashgorai14:xOdZX0B35dVBtbYj@cluster0.behnepu.mongodb.net/learing?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.warn(err));

app.post("/register", jsonparser, (req, res) => {
  var cisper = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cisper.update(req.body.Password); // encrypting the password
  encrypted = Buffer.concat([encrypted, cisper.final()]);

  var data = new User({
    _id: new mongoose.Types.ObjectId(),
    Name: req.body.Name,
    Email: req.body.Email,
    Password: encrypted.toString("hex"), //making it a string
  });
  // console.warn(data);
  //saving the new user to the database
  data
    .save()
    .then((Result) => {
      //making a jsonwebtoken
      jwt.sign({ Result }, jwtkey, { expiresIn: "300s" }, (err, token) => {
        if (err) console.warn(err);
        else res.json(token);
      });
    })
    .catch((err) => {
      console.warn(err);
    });
});

app.get("/login", jsonparser, (req, res) => {
  User.find({ Email: req.body.Email })
    .then((user) => {
      // var decisper = crypto.createDecipheriv(
      //   "aes-256-cbc",
      //   Buffer.from(key),
      //   iv
      // );
      // var decrypted = decisper.update(user.Password);
      // decrypted = Buffer.concat([decrypted, decisper.final()]);
      // decrypted = decrypted.toString("hex");
      // if (req.body.Password == decrypted) {
      //   // jwt.sign({ user }, jwtkey, { expiresIn: "300s" }, (err, token) => {
      //   //   if (err) console.warn(err);
      //   //   else res.json(token);
      //   res.json(user);
      // } else res.send("acces denied");
      // // res.render("home", { data: data });
    })
    .catch((err) => {
      console.warn(err);
    });
});
app.listen(3000);

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const User = require("./assest/user");
const bodyparser = require("body-parser");
const { json } = require("body-parser");
const jsonparser = bodyparser.json();
mongoose.connect(
  "mongodb+srv://suprakashgorai14:xOdZX0B35dVBtbYj@cluster0.behnepu.mongodb.net/learing?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app
  .get("/users", (req, res) => {
    User.find().then((data) => {
      res.json(data); //to show the data in the browser
    });
  })
  .post("/users", jsonparser, (req, res) => {
    //to receive data from the browser and save
    let data = new User({
      _id: new mongoose.Types.ObjectId(),
      Name: req.body.Name,
      Email: req.body.Email,
      Phone: req.body.Phone,
    });
    data
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.warn(err);
      });
  })
  .delete("/users/:id", (req, res) => {
    // delete data from the database
    User.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.warn(err);
      });
  })
  .put("/users/:id", jsonparser, (req, res) => {
    // update data from the database
    User.updateOne({ _id: req.params.id }, { $set: { Name: req.body.Name } })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.warn(err);
      });
  });
app.listen(3000, () => {
  console.log("Running");
});

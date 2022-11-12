const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

module.exports = mongoose.model("students", userSchema);

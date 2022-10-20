const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  Name: String,
  Email: String,
  Password: String,
});

module.exports = mongoose.model("user", userSchema);

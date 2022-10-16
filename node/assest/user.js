const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: String,
  Email: String,
  Phone: String,
});

module.exports = mongoose.model("user", userSchema);

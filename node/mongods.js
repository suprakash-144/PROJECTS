const mongoose = require("mongoose");
const User = require("./assest/user");
mongoose.connect(
  "mongodb+srv://suprakashgorai14:xOdZX0B35dVBtbYj@cluster0.behnepu.mongodb.net/learing?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

User.find({}, function (err, user) {
  if (err) console.warn(err);
  console.warn(user);
});

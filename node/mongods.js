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

const entry = new User({
  _id: new mongoose.Types.ObjectId(),
  Name: "Soumyajit ",
  Email: "Soumyajit@gmail.com",
  Phone: "9547997545",
});
console.log(entry);
entry.save().catch((err) => {
  console.warn(err);
});

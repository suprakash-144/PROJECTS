const express = require("express");
const app = express();

//middleware express static function to import statuc css files
app.use("/assest", express.static("assest"));
app.set("view engine", "ejs");
app
  .get("/", (req, res) => {
    res.render("home", { name: "suprakash" });
  })
  .get("/about", (req, res) => {
    res.render("about", {
      name: "suprakash",
      address: "rajbandh",
      email: "suprakash@gmail.com",
    });
  })
  .get("/profile/:name", (req, res) => {
    data = {
      address: "rajbandh",
      email: "suprakash@gmail.com",
      skills: ["DSA", "python", "mearn"],
    };
    res.render("profile", { name: req.params.name, data: data });
  });
app.listen(3000, "localhost", () => {
  console.warn("running");
});

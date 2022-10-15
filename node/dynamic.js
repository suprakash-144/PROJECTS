const expres = require("express");
const app = expres();
app.set("view engine", "ejs"); // to use dynamic render
app
  .get("/", (req, res) => {
    res.render("home", { name: req.params.name }); //sending the file
  })
  .get("/about", (req, res) => {
    data = {
      address: "rajbandh",
      email: "suprakash@gmail.com",
      skills: ["DSA", "python", "mearn"],
    };
    res.render("about", {
      name: req.params.name,
      data: data,
    }); //sending the file
  })
  .get("/profile/:name", (req, res) => {
    data = {
      address: "rajbandh",
      email: "suprakash@gmail.com",
      skills: ["DSA", "python", "mearn"],
    };

    // console.warn(req.params); //to get the name of the user
    res.render("profile", { name: req.params.name, data: data });
  })
  .listen(3000, "localhost", () => {
    console.warn("Running");
  });

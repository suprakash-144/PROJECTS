const expres = require("express");
const app = expres();
app.set("view engine", "ejs"); // to use dynamic render
app
  .get("/", (req, res) => {
    res.render("profile"); //sending the file
  })
  .get("/profile/:name", (req, res) => {
    console.warn(req.params); //to get the name of the user
    res.render("profile", { name: req.params.name });
  })
  .listen(3000, "localhost", () => {
    console.warn("Running");
  });

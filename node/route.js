const expres = require("express");
const app = expres();
app.get("/", (req, res) => {
  // res.send("this is the page");
  res.sendFile(__dirname + "/home.html");
});
app.get("/about", (req, res) => {
  // response.send("this is the about page ");
  res.sendFile(__dirname + "/about.html"); // send pages as response
});

app.listen(3000, "localhost", () => {
  console.warn("Running");
});

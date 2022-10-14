const { Console } = require("console");
const { response } = require("express");
const expres = require("express");
const app = expres();
app.get("/", (req, res) => {
  res.send("this is the page");
});
app.get("/about", (request, response) => {
  response.send("this is the about page ");
});

app.listen(3000, "localhost", () => {
  console.warn("Running");
});

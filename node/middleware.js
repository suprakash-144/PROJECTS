const expres = require("express");
const app = expres();
const router = expres.Router();

//to check the url is valid or not and then to proced with the request
const checkurl = (req, res, next) => {
  console.warn(req.url);
  next();
};
// app.use(checkurl);  to use for entire prgram

app.get("/", (req, res) => {
  res.send("this is the page");
});
// app.get("/about", (request, response) => {
//   response.send("this is the about page ");
// });
router.get("/about", checkurl, (request, response) => {
  //when slective router is used
  response.send("this is the about page ");
});
app.use("/", router);
app.listen(3000, "localhost", () => {
  console.warn("Running");
});

const http = require("http");
const fs = require("fs");

// creating the server
const server = http.createServer((req, res) => {
  console.log("request received");
  console.log(req.url, req.method);

  //     sending response
  //   sets the types of data to be send
  res.setHeader("content-type", "text/plain");
  res.write("First server");
  res.end();
  // content type as html
  res.setHeader("content-type", "text/html");

  res.write('<head><link rel="StyleSheet" herf="#" ></head>');
  res.write("<p> First server </p>");
  res.write("<p> hello world! </p>");
  res.end();

  //   sending a already existing html file
  res.setHeader("content-type", "text/html");
  fs.readFile("tut.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });

  //   sending html file acording to the url
  let path = "";
  switch (req.url) {
    case "/":
      path += "index.html";
      //   status code is set to succsesful
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "about-me":
      // redirecting the url request to differnet url request
      res.setHeader("location", "about");
      //   permanent redirect status code
      res.statusCode = 301;
      break;
    default:
      path += "404.html";
      //   content not found status code
      res.statusCode = 404;
      break;
  }
  res.setHeader("content-type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

// staring the server to listen to http request from the web
server.listen(3000, "localhost", () => {
  console.log("Listeing from port 3000");
});

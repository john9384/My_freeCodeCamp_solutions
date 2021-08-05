// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

let responseData = {};

app.get("/api/:date", (req, res) => {
  let dateQuery = req.params.date;
  if (dateQuery.includes("-") || dateQuery.includes(" ")) {
    responseData["unix"] = new Date(dateQuery).getTime();
    responseData["utc"] = new Date(dateQuery).toUTCString();
  } else {
    dateQuery = parseInt(dateQuery);
    responseData["unix"] = new Date(dateQuery).getTime();
    responseData["utc"] = new Date(dateQuery).toUTCString();
  }
  if (!responseData["unix"] || !responseData["utc"]) {
    res.json({ error: "Invalid Date" });
  }

  res.json(responseData);
});

app.get("/api", (req, res) => {
  responseData["unix"] = new Date().getTime();
  responseData["utc"] = new Date().toUTCString();

  res.json(responseData);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

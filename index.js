const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();

app.use(serveStatic(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;
const server = app.listen(port, function (err) {
  if (err) console.log("Error in server setup");
  console.log(`Server listening on http://localhost:${port}`);
});

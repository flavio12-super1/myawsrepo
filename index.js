const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

const port = process.env.PORT || 4200;

app.get("/", (req, res) => {
  res.send("homepage");
});

app.get("/message", (req, res) => {
  res.send("hello from server");
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");
const app = express();
const PORT = 3000;
const drinks = require("./models/drinks.js");

app.get("/drinks", (req, res) => {
  res.send();
});

app.get("/", (req, res) => {
  res.send("Welcome to the GitPub App!");
});

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});

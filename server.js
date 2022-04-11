const express = require("express");
const app = express();
const PORT = 3000;
const drinks = require("./models/drinks.js");

// Root Route - Welcome
app.get("/", (req, res) => {
  res.send("Welcome to the GitPub App!");
});

// Index Route - show all of the fruits
app.get("/drinks/", (req, res) => {
  res.render("drinks_index.ejs", { drinks: drinks });
 
});

// // Show Route - show a specific fruit
// app.get("/drinks/:id", (req, res) => {
//   res.render("show.ejs", { drinks: drinks[req.params.id] });
// });

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});

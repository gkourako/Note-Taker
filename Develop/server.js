// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
  return res.json(characters);
});

app.post("/api/notes", function(req, res){
  // var newNote = 
  console.log(req.body)
});

app.delete("/api/notes/:id", function(req, res){

});

app.get("*", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
});

// Last thing
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var dbJson = require("./db/db.json")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

var notes = "The king";

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"))
  // return res.json(notes);
});

app.get("/api/notes", function(req, res){
  res.sendFile(path.join(__dirname, "/db/db.json"))
    re
})

app.post("/api/notes", function(req, res){
  // var newNote = 
 var notes = req.body;
});

app.delete("/api/notes/:id", function(req, res){
  res.sendFile
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Last thing
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var dbJson = require("./db/db.json")
var fs = require("fs");
const { json } = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"))
  // return res.json(notes);
});

app.get("/api/notes", function(req, res){
  res.json(dbJson)
})

app.post("/api/notes", function(req, res){
//  console.log(req.body)
let id = dbJson.length + 1
var title = req.body.title
var text = req.body.text
var newEntry = {
  title: title,
  text: text,
  id: id
}
  
  dbJson.push(newEntry)
  console.log(dbJson)
 

  fs.writeFile("./db/db.json", JSON.stringify(dbJson), function(){
    console.log("success")
  })
});

app.delete("/api/notes/:id", function(req, res){

  delete newEntry
//  console.log(req.params.id)
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Last thing
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
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
let id = dbJson.length ? dbJson[dbJson.length-1].id + 1 : 0
var title = req.body.title
var text = req.body.text

req.body.id = id
dbJson.push(req.body)
  
 
 

  fs.writeFile("./db/db.json", JSON.stringify(dbJson), function(){
    res.json(dbJson)
  })
});

app.delete("/api/notes/:id", function(req, res){
  var id = req.params.id
  console.log(id)
  for(var i = 0; i < dbJson.length; i++) {
    if(dbJson[i].id === id) {
      dbJson = dbJson.splice(i, 1)
      fs.writeFile('./db/db.json', dbJson.id)
    } 
    
  }
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Last thing
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
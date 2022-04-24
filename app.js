const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const date= require(__dirname + "/date.js")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs"); //use or set ejs as our view engine

//let items = ["Eat", "repeat"];
const items = ["Eat", "repeat"];
let workItems = [];
app.get("/", function (req, res) {
  let day = date.getDate()//export wala

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

  //res.render("list",{ newListItem: item});

  //console.log(item);
});
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});
app.get("/about",function(req,res){

  res.render("about")
})
app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3001, function () {
  console.log("Server started in 3001");
});

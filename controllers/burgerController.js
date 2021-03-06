var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");
var path = require("path"); 

router.get("/", function(req, res) {
    burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

//unsure if we need an update 
// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {

        return res.status(404).end();
    } else {

      res.status(200).end();
    }
  });
});

module.exports = router;

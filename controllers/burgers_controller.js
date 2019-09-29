

let express = require('express');
let router = express.Router();

let burgers = require('../models/burgers.js');

router.get('/index', function(req, res){

    burgers.selectAll(function(results){
        //code to do things with the results of this query to the model
        // this is where we can render the handlebars
        let hbsObject = {
            burgers: results
        };
        console.table(results);
        res.render('index', hbsObject);
    });

});

router.post('/burger', function(req, res){
    console.log("IN POST")
    burgers.insertOne([
        'burger_name', 'devoured'
    ], [
        req.body.name, false 
    ], function(result){
        res.json(true);
    });

});

router.put("/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router;
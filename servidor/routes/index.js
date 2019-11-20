var express = require('express');
var router = express.Router();

const MongoDB = require('mongoose');



/* GET home page. */
router.get('/', function(req, res, next) {
  MongoDB.connect('mongodb://localhost:27017/vaso')
    .then(function(database) {
        const collection = database.collection('usuarios');
        return collection.find({nombre:"Andres"});
    })    
    .then(function(result) {
        console.log(result);
    });
  //res.render('index', { title: 'Express' });
});

module.exports = router;

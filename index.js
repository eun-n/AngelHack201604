var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var url = require('url');

var app = express();
app.set('view engine', 'ejs');
//app.use(express.static(__dirname + '/views'));
app.use(ejsLayouts);


app.get('/', function(req, res){
  res.render('index', {name: "Stuff and stuff"});
});



app.listen(3000);
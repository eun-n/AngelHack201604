var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ejs = require('ejs');
var request = require("request");
var bodyParser = require('body-parser');
var db = require("./models");


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
// app.use(ejsLayouts);

app.get('/', function(req, res) {
  db.problem.findAll().then(function(problem) {
    res.render('index', {problem: problem});
  });
});

app.get('/chat', function(req, res){
  res.sendfile('views/chat.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  socket.broadcast.emit('hi');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

app.post('/', function(req, res) {
  //good spot to filter the data here
  console.log(req.body);
  db.problem.create(req.body).then(function() {
    res.redirect('/');
  });
});

app.listen(process.env.PORT || 3000)


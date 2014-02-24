var express = require('express');
    app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
// routingの前に必要
app.use(express.json());
app.use(express.urlencoded());

app.use(express.logger('dev'));
// app.getのrouting
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/new', function(req, res) {
  res.render('new');
});

app.post('/create', function(req, res) {
  res.send(req.body.name);
});

//app.param('id', function(req, res, next, id) {
//  var users = ['taguchi', 'fkoji', 'dotinstall'];
//  req.params.name = users[id];
//  next();
//});

//app.get('/hello/:id', function(req, res) {
//  res.send('hello ' + req.params.name);
//});

//app.get('/bye/:id', function(req, res) {
//  res.send('bye ' + req.params.name);
//});

//app.use(function(req, res, next) {
//  console.log('my custom middleware !');
//  next();
//});

//app.get('/', function(req, res) {
//  res.send('hello world');
//});

//app.get('/', function(req, res) {
//  res.render('index', {title: 'title'});
//});

//app.get('/about', function(req, res) {
//  res.send('about this page');
//});

// プレースホルダー
//app.get('/users/:name', function(req, res) {
//  res.send('hello, ' + req.params.name);
//});

//app.get('/users/:name?', function(req, res) {
//  if (req.params.name) {
//    res.send('hello, ' + req.params.name); 
//  } else {
//    res.send('hello, nobody!');
//  }
//});

//app.get('/items/:id([0-9]+)', function(req, res) {
//  res.send('item no: ' + req.params.id);
//});

//app.get('/hello.txt', function(req, res) {
//  // res.sendfile(__dirname + '/public/hello.txt');
//  res.send('Hello from app.js');
//});

app.listen(3000);
console.log('server starting ... ');

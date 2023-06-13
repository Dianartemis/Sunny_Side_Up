var express = require('express');
var path = require('path');

var app = express();
var server = require('http').createServer(app).listen(3000);

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/memory', function(req, res) {
    res.sendFile(__dirname + '/public/memory.html');
});

app.get('/war', function(req, res) {
    res.sendFile(__dirname + '/public/war.html');
});
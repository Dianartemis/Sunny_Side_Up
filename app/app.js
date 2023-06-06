var express = require('express');
var path = require('path');
var mdeal = require('./mdealstart');

var app = express();
var server = require('http').createServer(app).listen(3000);

var io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname,'public')));
app.post('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function(socket) {
    mdeal.initGame(io, socket);
});
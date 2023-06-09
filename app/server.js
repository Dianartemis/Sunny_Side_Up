const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
  // Assuming you have the 'mdealstart.js' file in the same directory
  const mdeal = require('./mdealstart');
  mdeal.initGame(io, socket);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

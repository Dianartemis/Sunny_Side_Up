var io;
var gameSocket;

/**
 * // Has the functions that app.js calls on to initialize new game instance
 * 
 * @param sio - socket.io library
 * @param socket - socket object
 */

exports.initGame = function(sio, socket) {
    io = sio;
    gameSocket = socket;
    gameSocket.emit('connected', { message: "You are connected!" });

    // Host Events
    gameSocket.on('hostCreateNewGame', hostCreateNewGame);
    //gameSocket.on('hostRoomFull', hostPrepareGame);

    // Player Events
    gameSocket.on('playerJoinGame', playerJoinGame);
}

// Host Functions
function hostCreateNewGame() {
    // random game id
    var thisGameID = (Math.random() * 100000) | 0;

    this.emit('newGameCreated', {gameId: thisGameID, mySocketId: this.id});

    this.join(thisGameID.toString());
}

// function hostPrepareGame() {
//     var sock = this;
//     var data = {
//         mySocketId: sock.id,
//         gameId: sock.gameId
//     };

// }

// Player Functions
function playerJoinGame(data) {
    var sock = this;
    var room = gameSocket.manager.rooms["/" + data.gameId];

    if (room != undefined) {
        data.mySocketId = sock.id;
        sock.join(data.gameId);
        io.sockets.in(data.gameId).emit('playerJoinedRoom', data);
    } else {
        this.emit('error', {message: "This room does not exist."});
    }
}


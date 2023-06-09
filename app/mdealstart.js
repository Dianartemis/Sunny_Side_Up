// var io;
// var gameSocket;

// /**
//  * // Has the functions that app.js calls on to initialize new game instance
//  * 
//  * @param sio - socket.io library
//  * @param socket - socket object
//  */

// exports.initGame = function(sio, socket) {
//     io = sio;
//     gameSocket = socket;
//     gameSocket.emit('connected', { message: "You are connected!" });

//     // Host Events
//     gameSocket.on('hostCreateNewGame', hostCreateNewGame);
//     //gameSocket.on('hostRoomFull', hostPrepareGame);

//     // Player Events
//     gameSocket.on('playerJoinGame', playerJoinGame);
// }

// // Host Functions
// function hostCreateNewGame() {
//     // random game id
//     var thisGameID = (Math.random() * 100000) | 0;

//     this.emit('newGameCreated', {gameId: thisGameID, mySocketId: this.id});

//     this.join(thisGameID.toString());
// }

// // function hostPrepareGame() {
// //     var sock = this;
// //     var data = {
// //         mySocketId: sock.id,
// //         gameId: sock.gameId
// //     };

// // }

// // Player Functions
// function playerJoinGame(data) {
//     var sock = this;
//     var room = gameSocket.manager.rooms["/" + data.gameId];

//     if (room != undefined) {
//         data.mySocketId = sock.id;
//         sock.join(data.gameId);
//         io.sockets.in(data.gameId).emit('playerJoinedRoom', data);
//     } else {
//         this.emit('error', {message: "This room does not exist."});
//     }
// }

import React, { useEffect } from 'react';
import io from 'socket.io-client';

const App = () => {
  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('connected', (data) => {
      console.log(data.message);
    });

    socket.on('newGameCreated', (data) => {
      console.log(data); // Handle new game creation event
    });

    socket.on('playerJoinedRoom', (data) => {
      console.log(data); // Handle player joined room event
    });

    socket.on('error', (data) => {
      console.error(data.message); // Handle error event
    });

    socket.emit('hostCreateNewGame');

    // Cleanup
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Hello World!</div>;
};

export default App;


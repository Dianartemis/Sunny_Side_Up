// the js for index.html
;
jQuery(function($) {
    'use strict';

    var IO = {
        init: function() {
            IO.socket = io.connect();
            IO.bindEvents();
        },

        bindEvents: function() {
            IO.socket.on('connected', IO.onConnected);
            IO.socket.on('newGameCreated', IO.onNewGameCreated);
            IO.socket.on('playerJoinedRoom', IO.playerJoinedRoom);
        },

        onConnected: function(data) {
            // get the user's socket io session id
            Index.mySocketId = IO.socket.id;
            console.log(Index.mySocketId)
        },


        // Creating a new game 
        onNewGameCreated: function(data) {
            Index.Host.gameInit(data);
        },

        // player joining game
        playerJoinedRoom: function(data) {
            Index[Index.myRole].updateWaitingScreen(data);
        }
    };

    var Index = {

        gameID: 0,
        myRole: '',
        mySocketId: '',

        // runs when page loads
        init: function() {
            Index.cacheElements();
            Index.showInitScreen();
            Index.bindEvents();
        },

        // integrate templates
        cacheElements: function() {
            Index.$doc = $(document);

            // Templates
            Index.$gameTable = $('#gameTable');
            Index.$templateHomeScreen = $('#home-screen').html();
            Index.$templateJoinGame = $('#join-game').html();
            Index.$templateCreateGame = $('#create-game').html();
        },

        // button stuff
        bindEvents: function() {
            Index.$doc.on('click', '#createButton', Index.Host.onCreateClick);
            Index.$doc.on('click', '#joinButton', Index.Player.onJoinClick);
            Index.$doc.on('click', '#joinGame', Index.Player.onPlayerStartClick)
        },

        // show the initial screen
        showInitScreen: function() {
            Index.$gameTable.html(Index.$templateHomeScreen);
        },

        // Host object
        Host: {
            players : [],
            isNewGame: false,
            numPlayersInRoom: 0,

            // create a new game
            onCreateClick: function() {
                console.log('NEW GAME')
                IO.socket.emit('hostCreateNewGame');
            },

            // initial host screen
            gameInit: function(data) {
                Index.gameId = data.gameId;
                Index.mySocketId = data.mySocketId;
                Index.myRole = 'Host';
                Index.Host.numPlayersInRoom = 0;
                Index.Host.displayNewGameScreen();
            },

            // show the screen for the new game with game ID
            displayNewGameScreen: function() {
                Index.$gameTable.html(Index.$templateCreateGame);

                // Display game ID
                $('#NewGameCode').text(Index.gameId);
            },

            updateWaitingScreen: function(data) {
                if (Index.Host.isNewGame) {
                    Index.Host.displayNewGameScreen();
                }

                $('#playersWaiting').append('<p/>').text('Player ' + data.playerName + ' joined the game.');

            }
        },

        // Player object
        Player: {
            hostSocketId: '',
            myName: '',
            onJoinClick: function() {
                console.log("JOIN GAME")
                Index.$gameTable.html(Index.$templateJoinGame);
            },

            onPlayerStartClick: function() {
                var data = {
                    gameId: +($('#inputGameId').val()),
                    playerName: $('#inputPlayerName').val() || 'anon'
                };
                IO.socket.emit('playerJoinGame', data);
                Index.myRole = 'Player';
                Index.Player.myName = data.playerName;
            }
        
        }
    };

    IO.init();
    Index.init();

}($));
var server = require('./controllers/http_controller').createServer();
var io = require('socket.io').listen(server);
var game = require('./controllers/game_controller');

// We delegate inbound IO to the game controller
io.sockets.on('connection', game.ioConnection);
io.sockets.on('disconnect', game.ioDisconnect);
io.sockets.on('message', game.ioMessage);

// We handle outbound IO from the game controler here
game.on('ioServerToSockets', function(e) {
	for ( var i = 0; i < e.sockets.length; i++) {
		e.sockets[i].send(e.msg);
	}
});
game.on('ioServerToRooms', function(e) {
	for ( var i = 0; i < e.rooms.length; i++) {
		io.sockets['in'](e.rooms[i].send(e.msg));
	}
});
game.on('ioServerToAll', function(e) {
	io.sockets.send(e.msg);
});
game.on('ioSocketToRooms', function(e) {
	for ( var i = 0; i < e.rooms.length; i++) {
		e.socket.broadcast.to(e.rooms[i]).send(e.msg);
	}
});
game.on('ioSocketToAll', function(e) {
	e.socket.broadcast.send(e.msg);
});

// Start the server
server.listen(8080);

/*
 * io.sockets.on('connection', function(socket) { // Add client to a random
 * room... var player = new models.Player({socket:socket});
 * player.set({room:rooms.at(0)}); players.add(player);
 * 
 * socket.on('disconnect', function() { players.remove(player); });
 * 
 * socket.on('message', function(msg) { var words = msg.split(" "); var cmd =
 * helper.getCommand(words[0]);
 * 
 * switch (cmd) { default:
 * 
 * break; } }); });
 */
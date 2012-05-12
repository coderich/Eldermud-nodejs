var server = require('./controllers/http_controller').createServer();
var io = require('socket.io').listen(server);
var models = require('./models/eldermud_models');
var helper = require('./helpers/helper.js');
var config = require('./config/config.js');

var rooms = new models.RoomCollection([new models.Room({id:1, e:2, title:'idk', description:'idk'}), new models.Room({id:2, w:1, title:'idk', description:'idk'})]);
var map = new models.Map({rooms:rooms});
var players = new models.PlayerCollection();
var app = new models.AppModel({io:io, map:map, players:players});

io.sockets.on('connection', function(socket) {
	// Add client to a random room...
	var player = new models.Player({socket:socket});
	player.set({room:rooms.at(0)});
	players.add(player);
	
	socket.on('disconnect', function() {
		players.remove(player);
	});
	
	socket.on('message', function(msg) {
		var words = msg.split(" ");
		var cmd = helper.getCommand(words[0]);
		
		switch (cmd) {
		default:
			
			break;
		}
	});
});

server.listen(8080);
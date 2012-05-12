var server = require('express').createServer();
var _ = require('underscore')._;
var backbone = require('backbone');
var io = require('socket.io').listen(server);
var models = require('./models/eldermud_models');
var jade = require('jade');

server.set('view engine', 'jade');
server.set('view options', {layout: false});
server.get('/*.(js|css)', function(req, res) {
	res.sendfile('./public' + req.url);
});
server.get('/', function(req, res) {
	res.render('eldermud_view');
});

console.log(models);
/*
var room1 = new models.Room({id:1, e:2});
var room2 = new models.Room({id:2, w:1});
var rooms = new models.RoomCollection([room1, room2]);
var map = new models.Map({rooms: rooms});
var players = new models.PlayerCollection();
var app = new models.AppModel({io: io, map: map, players: players});

io.sockets.on('connection', function(client) {
	client.on('disconnect', function() {});

	// Add client to a random room...
	players.add({room: rooms.at(Math.floor((Math.random() * 2) + 1)), socket: client});
});
*/

server.listen(8080);
var server = require('express').createServer();
var _ = require('underscore')._;
var backbone = require('backbone');
var io = require('socket.io').listen(app);
var models = require('./models/eldermud_models');

require('jade');
server.set('view engine', 'jade');
server.set('view options', {
	layout : false
});

server.get('/*.(js|css)', function(req, res) {
	res.sendfile('./public' + req.url);
});

server.get('/', function(req, res) {
	res.render('eldermud_view');
});

var rooms = new models.RoomCollection([{id:1, e:2}, {id:2, w:1}]);
var map = new models.Map({rooms: rooms});
var players = new models.PlayerCollection();
var app = new models.AppModel({io: io, map: map, players: players});

io.sockets.on('connection', function(client) {
	client.on('disconnect', function() {});

	// Add client to a random room...
	players.add({room: rooms.at(Math.floor((Math.random() * 2) + 1)), socket: client});
});

app.listen(8080);
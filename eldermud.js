var server = require('express').createServer();
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

var rooms = new models.RoomCollection([new models.Room({id:1, e:2, title:'idk', description:'idk'}), new models.Room({id:2, w:1, title:'idk', description:'idk'})]);
var map = new models.Map({rooms:rooms});
var players = new models.PlayerCollection();
var app = new models.AppModel({io:io, map:map, players:players});

io.sockets.on('connection', function(client) {
	client.on('disconnect', function() {
		players.remove(players.getByCid(client.id));
	});

	// Add client to a random room...
	players.add({room:rooms.at(Math.floor((Math.random() * 2))), socket:client, cid:client.id});
});

server.listen(8080);
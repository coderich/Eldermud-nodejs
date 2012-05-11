var app = require('express').createServer();
var io = require('socket.io').listen(app);

require('jade');
app.set('view engine', 'jade');
app.set('view options', {
	layout : false
});

app.get('/*.(js|css)', function(req, res) {
	res.sendfile('./public' + req.url);
});

app.get('/', function(req, res) {
	res.render('game');
});

var clients = {};
var map = {"1":{"e":"2"}, "2":{"w":"1"}};

io.sockets.on('connection', function(client) {
	// Create random room
	var room = Math.floor((Math.random() * 2) + 1);

	// Add client to list and give welcome
	clients[client.id] = client;
	client.set('room', room);
	client.join(room);
	client.send("Hello, Welcome to ElderMud!");
	client.broadcast.send("Someone has just entered the game!");
	io.sockets.in(room).emit('who', {
		who : io.sockets.clients(room)
	});

	client.on('disconnect', function() {
		delete clients[client.id];
		client.broadcast.send("Someone has just disconnected...");
		io.sockets.emit('who', {
			who : Object.keys(clients)
		});
	});

	client.on('message', function(msg) {
		client.send("You say: " + msg);
		client.get('room', function(err, room) {
			client.broadcast.to(room).send("Someone says: " + msg);
		});
	});
});

app.listen(8080);
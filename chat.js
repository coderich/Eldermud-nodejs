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
	res.render('chat');
});

var clients = {};

Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key))
			size++;
	}
	return size;
}

function broadcast(msg) {
	if (Object.size(clients)) {
		io.broadcast.send(msg);
	}
}

io.sockets.on('connection', function(client) {
	// Notify everyone else someone has arrived
	broadcast("Someone has just entered the room, say hello!");

	// Add client to list and give welcome
	clients[client.id] = client;
	client.send("Hello, Welcome to ElderMud!");

	client.on('disconnect', function() {
		delete clients[client.id];
		broadcast("Someone has just disconnected...");
	});
});

app.listen(8080);
var app = require('express').createServer();
var socket = require('socket.io').listen(app);

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

socket.sockets.on('connection', function(client) {
	socket.socket(client.id).send("Hello, Welcome to ElderMud!");
	socket.broadcast.send("Someone has just entered the room, say hello!");
	client.on('disconnect', function() {
		socket.broadcast.send("Someone has just disconnected...");
	});
});

app.listen(8080);
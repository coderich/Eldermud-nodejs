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

io.sockets.on('connection', function(client) {
	io.sockets.socket(client.id).send("Hello, Welcome to ElderMud!");
	io.broadcast.send("Someone has just entered the room, say hello!");

	client.on('disconnect', function() {
		io.broadcast.send("Someone has just disconnected...");
	});
});

app.listen(8080);
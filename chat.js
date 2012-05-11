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
	socket.sockets.json.send({
		value : "Hello, Welcome to ElderMud!"
	});
	client.on('disconnect', function() {
		clientDisconnect(client)
	});
});

function clientDisconnect(client) {
	socket.sockets.json.send({
		value : "Someone has diconnected..."
	});
}

app.listen(8080);
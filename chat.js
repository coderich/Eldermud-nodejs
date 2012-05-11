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
		clients : socket.sockets.clients().length
	});
	client.on('disconnect', function() {
		clientDisconnect(client)
	});
});

function clientDisconnect(client) {
	socket.sockets.json.send({
		clients : socket.sockets.clients().length
	});
}

app.listen(8080);
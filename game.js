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
var map = {
	1 : {
		e : 2
	},
	2 : {
		w : 1
	}
};

io.sockets.on('connection', function(client) {
	// Create random room
	var room = Math.floor((Math.random() * 2) + 1);

	// Add client to list and give welcome
	clients[client.id] = client;
	client.set('room', room);
	client.join(room);
	client.send("Hello, Welcome to ElderMud!");
	client.emit('fov', Object.keys(map[room]));
	client.broadcast.send("Someone has just entered the game!");

	io.sockets.in(room).emit('who', { who : Object.keys(io.sockets.clients(room)) });

	client.on('disconnect', function() {
		delete clients[client.id];
		client.broadcast.send("Someone has just disconnected...");
		io.sockets.in(room).emit('who', { who : Object.keys(io.sockets.clients(room)) });
	});

	client.on('message', function(msg) {
		var words = msg.split(" ");
		var cmd = words[0];
		
		switch (cmd)
		{
		case 'go':
			var dir = words[1];
			client.get('room', function(err, roomId) {
				var room = map[roomId];
				if (typeof(room[dir]) !== 'undefined') {
					var newRoomId = room[dir];
					var newRoom = map[newRoomId];
					client.leave(roomId);
					client.set('room', newRoomId);
					client.join(newRoomId);
					client.emit('fov', Object.keys(newRoom));
					client.broadcast.send('Someone has just entered the room, say hello!');
					io.sockets.in(newRoomId).emit('who', { who : Object.keys(io.sockets.clients(newRoomId)) });
				} else {
					client.send("Sorry, there is nothing in that direction (" + dir + ")");
				}
			});
			break;
		default:
			client.send("You say: " + msg);
			client.get('room', function(err, room) {
				client.broadcast.to(room).send("Someone says: " + msg);
			});
			break;
		}
	});
});

app.listen(8080);
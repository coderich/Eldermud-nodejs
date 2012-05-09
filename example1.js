// Require HTTP module (to start server) and Socket.IO
var http = require('http'), io = require('socket.io');

// Start the server on port 8080
var server = http.createServer(function (req, res) {
	// HTML headers and message
	res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
	res.end('Hello World\n');
});
server.listen(8080);

// Create a Socket.IO instance, passing it our server
var socket = io.listen(server);

// Add a connect listener
socket.on('connection', function(client) {
	// Success! Now listen to messages to be received
	client.on('message', function(event) {
		console.log('Recieved message from client!', event);
	});

	client.on('disconnect', function() {
		clearInterval(interval);
		console.log('Client has disconnected');
	});

	// Create a periodical that sends a message to client every 5 seconds
	var interval = setInterval(function() {
		client.send('This is a message from the server! ' + new Date().getTime());
	}, 5000);
});

var _ = require('underscore')._;
var Backbone = require('backbone');
var realm = require('./data_controller').load();

// Every time a player is added
realm.get('players').on('add', function(player) {
	player.on('change:room', function() {

	});

	module.exports.trigger('ioSocketToAll', {
		socket : player.socket,
		msg : 'A new player has arrived!'
	});

	module.exports.trigger('ioServerToSockets', {
		sockets : [ player.socket ],
		msg : 'Welcome to Eldermud!'
	});
});

module.exports = {
	// IO Handling
	ioConnection : function(socket) {
		// Disconnect handler
		socket.on('disconnect', function() {
			module.exports.trigger('ioServerToAll', {
				msg : 'Someone has just disconnected...'
			});
		});

		// Message handler
		socket.on('message', function(msg) {
			module.exports.trigger('ioSocketToAll', {
				socket : this,
				msg : msg
			});
		});

		// TODO - Authenticate
		realm.get('players').add({
			room : 1,
			socket : socket
		});
	}
};

// Extend to be an event dispatcher
_.extend(module.exports, Backbone.Events);
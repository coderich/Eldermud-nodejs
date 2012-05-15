var _ = require('underscore')._;
var Backbone = require('backbone');
var Player = require('../models/Player');
var realm = require('./data_controller').load();

// Every time a player is added
realm.get('players').on('add', function(player) {
	module.exports.trigger('ioSocketToAll', {
		socket : player.get('socket'),
		msg : 'A new player has arrived!'
	});

	module.exports.trigger('ioServerToSockets', {
		sockets : [ player.get('socket') ],
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
		var player = new Player();

		player.on('change:room', function() {
			module.exports.trigger('ioServerToSockets', {
				sockets : [ player.get('socket') ],
				msg : 'You moved...'
			});
		});

		player.set('{room : 1, socket : socket}');
		realm.get('players').add(player);
	}
};

// Extend to be an event dispatcher
_.extend(module.exports, Backbone.Events);
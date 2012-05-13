var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = {
	// IO Handling
	ioConnection : function(socket) {
		// Disconnect handler
		socket.on('disconnect', function() {
			module.exports.trigger('ioServerToAll', {
				'msg' : 'Someone has just disconnected...'
			});
		});
		
		// Message handler
		socket.on('message', function(msg) {
			module.exports.trigger('ioSocketToAll', {
				socket : this,
				msg : msg
			});
		});

		// Welcome the new player
		module.exports.trigger('ioServerToSockets', {
			sockets : [ socket ],
			msg : 'Hello, Welcome to ElderMud!!!'
		});
		
		// Notifiy everyone else of the new arrival
		module.exports.trigger('ioSocketToAll', {
			socket : socket,
			'msg' : 'Someone has just entered the game!'
		});
	},
};

// Extend to be an event dispatcher
_.extend(module.exports, Backbone.Events);
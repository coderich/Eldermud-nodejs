var _ = require('underscore')._;
var Backbone = require('backbone');
var data = require('./data_controller').load();

// Every time a player is added
data.get('players').on('add', function(player) {
	module.exports.trigger('ioServerToAll', {
		'msg' : 'A new player has arrived!'
	});
});

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

		// Add new player
		data.get('players').add();
	}
};

// Extend to be an event dispatcher
_.extend(module.exports, Backbone.Events);
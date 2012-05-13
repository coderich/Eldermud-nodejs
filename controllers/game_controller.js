var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = {
	// IO Handling
	ioConnection : function(socket) {
		module.exports.trigger('ioServerToSockets', {
			sockets : [ socket ],
			msg : 'Hello, Welcome to ElderMud!!!'
		});
		module.exports.trigger('ioSocketToAll', {
			socket : socket,
			'msg' : 'Someone has just entered the game!'
		});
	},
	ioDisconnect : function() {

	},
	ioMessage : function(msg) {

	}
};

// Extend to be an event dispatcher
_.extend(module.exports, Backbone.Events);
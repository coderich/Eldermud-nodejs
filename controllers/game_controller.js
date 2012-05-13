var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = {
	// IO Handling
	ioConnection : function(socket) {
		module.exports.trigger('ioSendSockets', {
			sockets : [ socket ],
			msg : 'Hello, Welcome to ElderMud!!!'
		});
	},
	ioDisconnect : function() {

	},
	ioMessage : function(msg) {

	}
};

// Extend to be an event dispatcher
_.extend(module.exports, Backbone.Events);
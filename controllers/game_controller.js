var _ = require('underscore')._;
var Backbone = require('Backbone');

// Extend to be an event dispatcher
_.extend(module.exports, Backbone.Events);

module.exports = {
	// IO Handling
	ioConnection : function(socket) {
		this.trigger('ioSendSockets', {
			sockets : [ socket ],
			msg : 'Hello, Welcome to ElderMud!!!'
		});
	},
	ioDisconnect : function() {

	},
	ioMessage : function(msg) {

	}
};
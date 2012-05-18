var _ = require('underscore')._;
var Backbone = require('backbone');
var Room = require('./Room');

module.exports = Backbone.Model.extend({
	defaults : {
		socket : undefined,			// Used for socket communication to the client
		currentRoom : new Room()	// Current room the player is in
	}
});
var _ = require('underscore')._;
var Backbone = require('backbone');
var RoomCollection = require('./RoomCollection');

module.exports = Backbone.Model.extend({
	initialize : function() {
		this.rooms = new RoomCollection();
	}
});
var _ = require('underscore')._;
var Backbone = require('backbone');
var RoomCollection = require('./RoomCollection');

module.exports = Backbone.Model.extend({
	defaults : {
		rooms : new RoomCollection()
	},
	initialize : function(args) {
		if (args && args.rooms) {
			console.log("SETTING ROOM COLLECTION");
			this.rooms = new RoomCollection(args.rooms);
			console.log(this.rooms.at(0));
		}
	}
});
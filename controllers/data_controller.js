var Map = require('../models/Map');
var Player = require('../models/Player');
var PlayerCollection = require('../models/PlayerCollection');
var Room = require('../models/Room');
var RoomCollection = require('../models/RoomCollection');

module.exports = {
	create : function() {

	},
	remove : function() {

	},
	save : function() {

	},
	load : function() {
		var map = new Map({
			rooms : new RoomCollection([ new Room({
				id : 1,
				e : 2,
				title : 'idk',
				description : 'idk'
			}), new Room({
				id : 2,
				w : 1,
				title : 'idk',
				description : 'idk'
			}) ])
		});

		return new Data({
			map : map
		});
	}
};
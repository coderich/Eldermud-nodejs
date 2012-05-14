var Map = require('../models/Map');
var Player = require('../models/Player');
var PlayerCollection = require('../models/PlayerCollection');
var Room = require('../models/Room');
var RoomCollection = require('../models/RoomCollection');
var Realm = require('../models/Realm');

module.exports = {
	create : function() {

	},
	remove : function() {

	},
	save : function() {

	},
	load : function() {
		var fs = require('fs');
		var realm = fs.readFileSync('../data/realm.json', 'ascii');
		console.log(realm);
		return new Realm(realm);
	}
};
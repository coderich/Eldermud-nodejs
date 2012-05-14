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
		var realm = fs.readFileSync('./data/realm.json', 'ascii');
		console.log(realm);
		return new Realm(realm);
	}
};
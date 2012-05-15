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
		var realm = eval('(' + fs.readFileSync('./data/realm.json', 'utf8') + ')');
		return new Realm(realm);
	}
};
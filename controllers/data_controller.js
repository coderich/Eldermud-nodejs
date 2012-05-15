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
		var realm = fs.readFileSync('./data/realm.json');
		console.log(eval(realm));
		return new Realm(eval(realm));
	}
};
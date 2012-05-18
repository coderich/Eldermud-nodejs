var Action = require('./Action');
var Visual = require('../observables/Visual');

module.exports = Action.extend({
	getOpening : function() {
		var direction = this.get('direction');
		var player = this.get('player');
		var username = player.get('username');

		return [ new Visual({
			firstPerson : 'You begin to walk ' + direction + ' ...',
			thirdPerson : username + ' begins to walk ' + direction + ' ...'
		}) ];
	},
	getClosing : function() {
		var direction = this.get('direction');
		var player = this.get('player');
		var username = player.get('username');

		return [ new Visual({
			firstPerson : null,
			thirdPerson : username + ' has left ' + direction
		}) ];
	}
});
var Action = require('./Action');
var Visual = require('../observables/Visual');

module.exports = Action.extend({
	getOpening : function() {
		var direction = this.get('direction');
		return [ new Visual({
			firstPerson : 'You begin to walk ' + direction + ' ...',
			thirdPerson : source.get('username') + ' begins to walk ' + direction + ' ...'
		}) ];
	},
	getClosing : function() {
		var direction = this.get('direction');
		return [ new Visual({
			firstPerson : null,
			thirdPerson : source.get('username') + ' has left ' + direction
		}) ];
	}
});
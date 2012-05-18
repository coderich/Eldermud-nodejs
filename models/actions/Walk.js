var _ = require('underscore')._;
var Backbone = require('backbone');
var Action = require('./Action');
var Visual = require('../observables/Visual');

module.exports = Action.extend({
	getIntentions : function(source, witness) {
		var direction = this.get('direction');

		if (source === witness) {
			return [ new Visual({
				msg : 'You begin to walk ' + direction + ' ...'
			}) ];
		} else {
			return [ new Visual({
				msg : source.get('username') + ' begins to walk ' + direction + ' ...'
			}) ];
		}
	}
});
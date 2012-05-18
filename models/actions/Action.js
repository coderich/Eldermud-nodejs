var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	getOpening : function() {
		return [];
	},
	getClosing : function() {
		return [];
	}
});
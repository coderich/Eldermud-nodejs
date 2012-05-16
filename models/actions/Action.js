var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	initialize : function(args) {
		if (!args || !args.firstPerson || !args.thirdPerson) {
			throw ("Invalid Constructor");
		}
	}
});
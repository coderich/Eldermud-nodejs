var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	intent : function(source, witness) {
		var direction = this.get('direction');

		if (source === witness) {
			return 'You begin to walk ' + direction + ' ...';
		} else {
			return source.get('username') + ' begins to walk ' + direction + ' ...';
		}
	}
});
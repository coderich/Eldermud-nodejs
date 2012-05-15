var _ = require('underscore')._;
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	toString : function() {
		var str = this.get('title') + "\n" + this.get('description') + "\n" + "Obvious Exists: ";
		for ( var dir in this.get('exits')) {
			switch (dir) {
			case 'n':
				str += 'north,';
				break;
			case 's':
				str += 'south,';
				break;
			case 'e':
				str += 'east,';
				break;
			case 'w':
				str += 'west,';
				break;
			case 'ne':
				str += 'northeast,';
				break;
			case 'nw':
				str += 'northwest,';
				break;
			case 'se':
				str += 'southeast,';
				break;
			case 'sw':
				str += 'southwest,';
				break;
			case 'u':
				str += 'up,';
				break;
			case 'd':
				str += 'down,';
				break;
			}
		}
		return str.trim(',');
	}
});
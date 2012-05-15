var _ = require('underscore')._;
var Backbone = require('backbone');
var Message = require('./Message');

module.exports = Backbone.Collection.extend({
	model : Message
});
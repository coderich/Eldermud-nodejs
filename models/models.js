//http://fzysqr.com/2011/02/28/nodechat-js-using-node-js-backbone-js-socket-io-and-redis-to-make-a-real-time-chat-app/
//http://fzysqr.com/2011/03/27/nodechat-js-continued-authentication-profiles-ponies-and-a-meaner-socket-io/
(function() {
	var server = false, models;

	if (typeof exports !== 'undefined') {
		_ = require('underscore')._;
		Backbone = require('backbone');

		models = exports;
		server = true;
	} else {
		models = this.models = {};
	}

	models.ChatEntry = Backbone.Model.extend({});

	models.ClientCountModel = Backbone.Model.extend({
		defaults : {
			"clients" : 0
		},
		updateClients : function(clients) {
			this.set({
				clients : clients
			});
		}
	});

	models.NodeChatModel = Backbone.Model.extend({
		defaults : {
			"clientId" : 0
		},
		initialize : function() {
			this.chats = new models.ChatCollection();
		}
	});
	
	models.ChatCollection = Backbone.Collection.extend({
		model: models.ChatEntry
	});
})();
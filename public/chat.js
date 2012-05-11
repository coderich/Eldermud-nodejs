$(document).ready(function() {
	var console = $("#console");
	var cmd = $("#cmd");
	var socket = io.connect();

	// Send message to server
	$(cmd).bind('keypress', function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);

		if (code === 13) {
			socket.send(cmd.val());
			cmd.val("");
		}
	})

	socket.on('connect', function() {
		socket.on('message', function(msg) {
			console.val(console.val() + msg + "\n");
			console.scrollTop(console[0].scrollHeight - console.height());
		});
	});
});

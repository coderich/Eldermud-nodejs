$(document).ready(function() {
	$console = $("#console");
	$cmd = $("#cmd");

	var socket = io.connect();
	socket.on('connect', function() {
		socket.on('message', function(msg) {
			$console.value = $console.value + msg;
		});
	});
});

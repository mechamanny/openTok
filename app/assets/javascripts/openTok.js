$( document ).ready(function() {
	var apiKey = keys.APIKEY;
	var sessionId = keys.SESSIONID
	var token = keys.TOKEN
// Initialize session, set up event listeners, and connect
var session = OT.initSession(apiKey, sessionId);

session.on("streamCreated", function(event) {
	session.subscribe(event.stream);
});


session.connect(token, function(error) {
	var publisher = OT.initPublisher();
	session.publish(publisher);
});
});

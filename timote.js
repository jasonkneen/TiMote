exports.exec = function(url,win) {

	var xhr = Titanium.Network.createHTTPClient();
	
	xhr.onerror = function(e) {
		Ti.API.info('IN ERROR ' + e.error);
	};
	xhr.onload = function(e) {
		Ti.API.info('EXECUTING CODE' + this.responseText);
		
		eval(this.responseText);
		
	};
	
	// open the client
	xhr.open('GET', url);
	xhr.send();
	
}


exports.exec = function(url,win) {

	var xhr = Titanium.Network.createHTTPClient();
	
	xhr.onerror = function(e) {
		Ti.API.info('ERROR ' + e.error);
	};
	xhr.onload = function(e) {		
		eval(this.responseText);
	};
	
	xhr.open('GET', url);
	xhr.send();	
}


TiMote
=======

A module demonstrating how a Titanium App could execute/integrate remote code

	var timote = require("timote");
	
Executing code:-
	
	motecode.exec('https://github.com/jasonkneen/TiMote/remote.js',WIN);
	
The optional WIN parameter allows you to passthrough the current Ti Window allowing the code to reference an object called "win" so it can directly interact with the application

The example references the remote.js file in this repo from the Simulator so you can see it in action. It adds a button to the current window, plus an event handler.


This is WORK IN PROGRESS!
	
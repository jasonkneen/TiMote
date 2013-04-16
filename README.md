TiMote
=======

Note - this is just a concept - wouldn't recommend using this in production as we're using Eval - it's just to prove that this kind of thing is possible.

A module demonstrating how a Titanium App could execute/integrate remote code. Very useful for being able to add/manipulate native controls and interfaces in an app without having to redeploy to the appstore.

Usage:-

	var timote = require("timote");
	
Executing code:-
	
	timote.exec('https://raw.github.com/jasonkneen/TiMote/master/remote.js',WIN);
	
The optional WIN parameter allows you to passthrough the current Ti Window allowing the code to reference an object called "win" so it can directly interact with the application

The example references the remote.js file in this repo from the Simulator so you can see it in action. It adds a button to the current window, plus an event handler.

The remote.js file code:-

	var newButton = Titanium.UI.createButton({
					title:'Click me!',			
					width:200,
					height:30
					});
					
	// add the event listener
	newButton.addEventListener("click",function() {
		alert('this code is running from a remote location!')
	});
	
	// add it to the view
	win.add(newButton);

This is WORK IN PROGRESS!
	

// This code should be placed on an external server in a JS file
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
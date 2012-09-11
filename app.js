// create a window
var win = Titanium.UI.createWindow({
	Title : "TiMote"
});

win.backgroundColor = '#fff';

var tabGroup = Ti.UI.createTabGroup();

var tab = Ti.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Code',
	window : win
});

tabGroup.addTab(tab);

tabGroup.open();

var timote = require("TiMote/timote");

timote.exec('https://raw.github.com/jasonkneen/TiMote/master/remote.js',win);

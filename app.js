// create a window
var win1 = Titanium.UI.createWindow({
	Title : "TiMote"
});
win1.backgroundColor = '#fff';

var tabGroup = Ti.UI.createTabGroup();

var tab1 = Ti.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Code',
	window : win1
});

tabGroup.addTab(tab1);

tabGroup.open();

var motecode = require("TiMote/timote");

motecode.exec('https://raw.github.com/jasonkneen/TiMote/master/remote.js',win1);

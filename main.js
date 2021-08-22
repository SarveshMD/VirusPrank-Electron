const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
	const myWindow = new BrowserWindow({
		height: 2000,
		width: 2000,
		fullscreen: true,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	myWindow.loadFile("index.html");
});

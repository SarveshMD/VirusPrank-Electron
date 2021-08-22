const { app, BrowserWindow } = require("electron");
const { exec } = require("child_process");

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

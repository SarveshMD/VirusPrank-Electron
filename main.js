const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
	const myWindow = new BrowserWindow({
		width: 800,
		height: 800,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	myWindow.loadFile("index.html");
});

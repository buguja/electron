const electron = require('electron');

electron.app.on('ready', function(){
    var mainWindow = new electron.BrowserWindow({
        width: 500,
        height: 400,
        backgroundColor: '#ececec'
    });
    // mainWindow.maximize();
    // Maximize window.
    mainWindow.setFullScreen(true);
    // Set window to full screen size.
    mainWindow.setMenu(null);
    mainWindow.loadURL('http://google.com');
});

const electron = require('electron');

electron.app.on('ready', function(){
    var mainWindow = new electron.BrowserWindow({
        width: 500,
        height: 400,
        backgroundColor: '#ececec'
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL('http://google.com');
});
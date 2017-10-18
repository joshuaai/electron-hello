const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;
const { setMainMenu } = require('./main-menu.js');

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 400, width: 400
  });
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html' ));
});
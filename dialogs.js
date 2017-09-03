const { dialog, app, nativeImage } = require('electron');
const fs = require('fs');
const path = require('path');

module.exports = { showMessage };

function showMessage(browserWindow) {
  dialog.showMessageBox(browserWindow, {
    type: 'info',
    icon: nativeImage.createFromPath('./gra.jpg'),
    message: 'Hello',
    detail: 'Very nice fruits :)',
    buttons: ['Greet', 'Close'],
    defaultId: 0,
  }, (clickedIndex) => {
    console.log(clickedIndex);
  })
}
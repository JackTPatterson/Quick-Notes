const { app, BrowserWindow, screen, CommandLine } = require('electron');
const path = require('path');

const os = require('os')

const platforms = {
  WINDOWS: 'WINDOWS',
  MAC: 'MAC',
  LINUX: 'LINUX',
  SUN: 'SUN',
  OPENBSD: 'OPENBSD',
  ANDROID: 'ANDROID',
  AIX: 'AIX',
};

const platformsNames = {
  win32: platforms.WINDOWS,
  darwin: platforms.MAC,
  linux: platforms.LINUX,
  sunos: platforms.SUN,
  openbsd: platforms.OPENBSD,
  android: platforms.ANDROID,
  aix: platforms.AIX,
};

const currentPlatform = platformsNames[os.platform()];

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

``

const createWindow = () => {

  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: width - 100,
    height: height - 100,

    icon: path.join(__dirname, 'icon.png')
  });

  



  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  console.log(currentPlatform)

  
};

$(document).ready(function(){ 
     $('select').awselect() 
     
    });
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
    console.log(path.join(__dirname, 'icon.png'))
    
  }
});



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

try {
  require('electron-reloader')(module)
} catch (_) {}


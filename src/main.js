const path = require('path');
const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Para aplicações empacotadas, use o caminho relativo adequado
  if (app.isPackaged) {
    // Se estiver empacotado, os arquivos estão na pasta 'resources'
    mainWindow.loadURL(`file://${path.join(__dirname, 'resources', 'app', 'build', 'index.html')}`);
  } else {
    // Se estiver em modo desenvolvimento
    mainWindow.loadURL(`file://${path.join(__dirname, 'build', 'index.html')}`);
  }

  // Caso você queira carregar a página via URL para desenvolvimento
  // mainWindow.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

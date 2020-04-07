const {app,BrowserWindow} = require("electron")
const url = require('url')
const path = require('path')

let mainWindow;

app.on("ready",()=>{
    mainWindow = new BrowserWindow({
        show:false,
        webPreferences:{
            nodeIntegration:true
        }
    })
    // console.log(__dirname)
    mainWindow.loadURL(url.format({
		pathname:path.join(__dirname,'app/static/index.html'),
		protocol:"file",
		slashes:true
    }));
    mainWindow.on("ready-to-show",()=>{
        mainWindow.show()
        mainWindow.webContents.openDevTools();/* mostrar los devtools al abrir la aplicacion */
    })
	mainWindow.on("closed",()=>{
		app.quit()
	})

})
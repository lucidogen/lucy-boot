/*
  # Booter

  FIXME: Cleanup and refactor properly. Now it's just a big HACK !!

*/
'use strict'

const Booter = function ()
{
}
module.exports = Booter

Booter.prototype.boot = function ( settings )
{
  console.log ( 'Boot 1' )
  const self    = this

  const url     = 'file://' + __dirname + '/../html/index.html'
  const gal_url = 'file://' + __dirname + '/../html/gallery.html'

  const app  = require('app')

  const Menu = require('menu')
  const MenuItem      = require('menu-item')
  const BrowserWindow = require('browser-window')

  require('crash-reporter').start()

  // main Window
  // why is this a 'var' ?
  var mainWindow = null
  var gallery    = null


  // load new scene in mainWindow

  // Quit on all windows close
  app.on('window-all-closed', function() { app.quit() })

  app.on('ready', function() {
    mainWindow = new BrowserWindow(
      { x:      0
      , y:      0
      , width:  960
      , height: 540 // half of 1920x1080
      })
    mainWindow.loadUrl(url)
    global.mainWindow = mainWindow
    

    mainWindow.on('closed', function() {
      // Dereference window object. Not really needed since we quit in this app.
      mainWindow = null
      global.mainWindow = null
    })

    var template = [{
        label: 'Lucidity',
        submenu: [{
          label: 'About Lucidity',
          selector: 'orderFrontStandardAboutPanel:'
        }, {
          type: 'separator'
        }, {
          label: 'Services',
          submenu: []
        }, {
          type: 'separator'
        }, {
          label: 'Hide Lucidity',
          accelerator: 'CommandOrControl+H',
          selector: 'hide:'
        }, {
          label: 'Hide Others',
          accelerator: 'CommandOrControl+Shift+H',
          selector: 'hideOtherApplications:'
        }, {
          label: 'Show All',
          selector: 'unhideAllApplications:'
        }, {
          type: 'separator'
        }, {
          label: 'Quit',
          accelerator: 'CommandOrControl+Q',
          click: function() {
            app.quit();
          }
        }, ]
      // }, {
      // 	label: 'Edit',
      // 	submenu: [{
      // 		label: 'Undo',
      // 		accelerator: 'CommandOrControl+Z',
      // 		selector: 'undo:'
      // 	}, {
      // 		label: 'Redo',
      // 		accelerator: 'Shift+CommandOrControl+Z',
      // 		selector: 'redo:'
      // 	}, {
      // 		type: 'separator'
      // 	}, {
      // 		label: 'Cut',
      // 		accelerator: 'CommandOrControl+X',
      // 		selector: 'cut:'
      // 	}, {
      // 		label: 'Copy',
      // 		accelerator: 'CommandOrControl+C',
      // 		selector: 'copy:'
      // 	}, {
      // 		label: 'Paste',
      // 		accelerator: 'CommandOrControl+V',
      // 		selector: 'paste:'
      // 	}, {
      // 		label: 'Select All',
      // 		accelerator: 'CommandOrControl+A',
      // 		selector: 'selectAll:'
      // 	}, ]
      }, {
        label: 'Lucy',
        submenu: [{
          label: 'Save As...',
          accelerator: 'CommandOrControl+S',
          click: function() {
            BrowserWindow.getFocusedWindow()
              .webContents
              .executeJavaScript("Lucy.app.saveAs()")
          }
        }, {
          label: 'Pause',
          accelerator: 'CommandOrControl+P',
          click: function() {
            BrowserWindow.getFocusedWindow()
              .webContents
              .executeJavaScript("Lucy.app.togglePause()")
          }
        }]
      }, {
        label: 'View',
        submenu: [{
          label: 'Reload',
          accelerator: 'CommandOrControl+R',
          click: function() {
            mainWindow.restart();
          }
        }, {
          label: 'Gallery',
          accelerator: 'CommandOrControl+G',
          click: function() {
            if (!gallery) {
              gallery = new BrowserWindow(
                { x:      0
                , y:      0
                , width:  960
                , height: 540 // half of 1920x1080
                }
              )
              gallery.loadUrl(gal_url)
              gallery.setFullScreen(mainWindow.isFullScreen())
            } else {
              gallery.webContents.executeJavaScript('Lucy.gallery.reload()')
            }
              
            mainWindow.hide()
            gallery.show()
          }
        }, {
          label: 'Toggle Stats',
          accelerator: 'CommandOrControl+T',
          click: function() {
            mainWindow.webContents.executeJavaScript('Lucy.app.toggleStats()')
          }
        }, {
          label: 'Toggle Full Screen',
          accelerator: 'CommandOrControl+F',
          click: function() {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
            if (gallery) {
              gallery.setFullScreen(mainWindow.isFullScreen())
            }
          }
        }, {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+CommandOrControl+I',
          click: function() {
            mainWindow.toggleDevTools();
          }
        }, ]
      }, {
        label: 'Window',
        submenu: [{
          label: 'Minimize',
          accelerator: 'CommandOrControl+M',
          selector: 'performMiniaturize:'
        }, {
          label: 'Close',
          accelerator: 'CommandOrControl+W',
          selector: 'performClose:'
        }, {
          type: 'separator'
        }, {
          label: 'Bring All to Front',
          selector: 'arrangeInFront:'
        }, ]
      }, {
        label: 'Help',
        submenu: [{
          label: 'Learn More',
          click: function() {
            require('shell').openExternal('http://electron.atom.io')
          }
        }, {
          label: 'Documentation',
          click: function() {
            require('shell').openExternal('https://github.com/atom/electron/tree/master/docs#readme')
          }
        }, {
          label: 'Community Discussions',
          click: function() {
            require('shell').openExternal('https://discuss.atom.io/c/electron')
          }
        }, {
          label: 'Search Issues',
          click: function() {
            require('shell').openExternal('https://github.com/atom/electron/issues')
          }
        }]
      }];

      let menu = Menu.buildFromTemplate(template);
      Menu.setApplicationMenu(menu);

  })
}

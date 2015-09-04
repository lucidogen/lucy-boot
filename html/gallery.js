'use strict'
const $      = require('jquery')
const fs     = require('fs')
const path   = require('path')
const remote = require('remote')

const Lucy = {}
global.Lucy = Lucy

const Gallery = function(spath) {
  this.spath = spath
}

const statPath = function(p) {
  try {
    return fs.statSync(p)
  } catch (e) {}
  return false
}        

// Only used in development
// const live = require('lucy-live')
// 
// let init = false
// live.path('./gallery.css', function() {
//   if (init) {
//     console.log("PATH CHANGED")
//     require('remote').getCurrentWindow().restart();
//   }
//   init = true
// })
// 
// live.watch('.')

Gallery.prototype.load = function(p) {
  let mainWindow = remote.getGlobal('mainWindow')
  // FIXME: Should we need to choose between 'edit' and 'load' ?
  mainWindow.webContents.executeJavaScript(`Lucy.app.edit('${p}')`)
  // mainWindow.webContents.executeJavaScript(`Lucy.app.load('${p}')`)
  mainWindow.show()
  remote.getCurrentWindow().hide()
}

Gallery.prototype.reload = function() {
  $('.scene').remove()
  this.make()
}

Gallery.prototype.make = function() {
  let spath = this.spath
  fs.readdir(spath, function(err, folders) {
    if (err) {
      return console.log(err)
    }
    let body = []
    folders.unshift('../work')

    folders.forEach(function(f) {
    if (statPath(path.join(spath, f, 'snapshot.png'))) {
        let src = `${ spath }/${f}/snapshot.png`
        console.log ( `src for ${ f } is '${ src }'.` )
        let div = `
          <div class='scene' data-name='${f}' onclick="Lucy.gallery.load('${spath}/${f}')" style='background-image:url(${src})'>
            <p class='title'>${decodeURIComponent(f).replace('-', ' ')}</p>
          </div>
        `
        $(document.body).append(div)    
      }
    })
  })
}

let   nodeapp  = require ( 'remote' ).require ( 'app' )
const rootpath = nodeapp.getAppPath ()

let gallery  = new Gallery ( `${ rootpath }/gallery` )
Lucy.gallery = gallery

gallery.reload()

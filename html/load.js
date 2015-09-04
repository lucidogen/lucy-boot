const Lucy = {}
global.Lucy = Lucy;

( function ()
  { var app  = require ( 'remote' ).require ( 'app' )
    var path = app.getAppPath () + '/index.js'
    require ( path )
  }
)()

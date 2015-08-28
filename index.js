/*
  # Lucidity main process manager

  Simplest usage example:
  
    require ( 'lucy-boot' )
    .boot ()
*/
'use strict'
const Booter      = require ( './lib/Booter' )
const booter      = new Booter ()

const boot = function ()
{ booter.apply ( booter, arguments )
}

module.exports = booter

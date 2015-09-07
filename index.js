/*
  # Lucidity main process manager

  Simplest usage example:
  
    require ( 'lucy-boot' )
    .boot ()
*/
'use strict'
const Booter      = require ( './lib/Booter' )
const booter      = new Booter ()

module.exports = booter

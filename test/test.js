'use strict'

require ( 'chai' )
.should ()
const Booter = require('../lib/Booter')

describe
( 'booter'
, function ()
  { let booter = require ( '../index' )
    
    it
    ( 'should be a Booter'
    , function ()
      { booter.should.be.an.instanceof(Booter)
      }
    )
  }
)


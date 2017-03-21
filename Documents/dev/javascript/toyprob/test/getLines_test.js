var assert = require('chai').assert;
var getLines = require('../js/getLines.js');

describe('The Loook and say sequence', function(){
  it('getLines', function(){
    assert.equal( getLines(2), "1,11" );
  });

  it('getLines', function(){
    assert.equal( getLines(3), "1,11,21" );
  });

  it('getLines', function(){
	  assert.equal( getLines(5), "1,11,21,1211,111221" );
  });

});


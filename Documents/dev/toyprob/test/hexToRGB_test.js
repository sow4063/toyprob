var assert = require('chai').assert;
var hexStringToRGB = require('../js/hextoRGB.js');

describe('Convert A Hex String To RGB', function(){
  it('Basic Tests', function(){
    assert.deepEqual( hexStringToRGB("#FF9933"), {r:255, g:153, b:51} );
  });
})

var assert = require('chai').assert;
var CaesarCipher = require('../js/caesarCipher.js');

describe("Caesare Cipher", function(){
  var c = new CaesarCipher(5);
  it("Basic Tests", function(){
    assert.equal( c.encode('Codewars'), 'HTIJBFWX' );
  });

  it("Basic Tests", function(){
    assert.equal( c.decode('BFKKQJX'), 'WAFFLES' );
  });
});

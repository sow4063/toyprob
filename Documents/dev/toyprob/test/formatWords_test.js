var assert = require('chai').assert;
var formatWords = require('../js/formatWords.js');

describe("Format Words", function(){
  it("Basic Tests", function(){
    assert.equal(formatWords(['ninja', 'samurai', 'ronin']), "ninja, samurai and ronin");
  });

  it("Basic Tests", function(){
    assert.equal(formatWords(['ninja', '', 'ronin']), "ninja and ronin");
  });

  it("Basic Tests", function(){
    assert.equal(formatWords([]), "");
  });

});

 // should return
 // should return
 // should return ""

var chai = require('chai');
var assert = chai.assert;
var scoreHand = require('../js/blackJack.js');


describe("Black Jack Scorer", function(){
  it("Basic Test", function(){
    assert.equal(scoreHand(["A"]), 11);
  });

  it("Basic Test", function(){
    assert.equal(scoreHand(["A", "J"]), 21);
  });

  it("Basic Test", function(){
    assert.equal(scoreHand(["A", "10", "A"]), 12);
  });

  it("Basic Test", function(){
    assert.equal(scoreHand(["5", "3", "7"]), 15);
  });

  it("Basic Test", function(){
    assert.equal(scoreHand(["5", "4", "3", "2", "A", "K"]), 25);
  });

});

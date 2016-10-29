var chai = require('chai');
var assert = chai.assert;
var beeramid = require('../js/beeramid');

describe("Beeramid", function(){
  it("should equal", function(){
    assert.equal(beeramid(1500, 2), 12);
  });

  it("should equal", function(){
    assert.equal(beeramid(5000, 3), 16);
  });

  beeramid(1500, 2); // should === 12
  beeramid(5000, 3); // should === 16

});

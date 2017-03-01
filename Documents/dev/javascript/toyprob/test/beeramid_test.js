var chai = require('chai');
var assert = chai.assert;
var beeramid = require('../js/beeramid');

describe("Beeramid", function(){
  it("should return 12", function(){
    assert.equal(beeramid(1500, 2), 12);
  });

  it("should return 16", function(){
    assert.equal(beeramid(5000, 3), 16);
  });

  it("should return 1", function(){
    assert.equal(beeramid(9, 2), 1);
  });

  it("should return 2", function(){
    assert.equal(beeramid(10, 2), 2);
  });

  it("should return 0", function(){
    assert.equal(beeramid(-1, 4), 0);
  });

});

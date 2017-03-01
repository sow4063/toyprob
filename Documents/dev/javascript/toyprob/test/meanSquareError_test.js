var chai = require('chai');
var assert = chai.assert;
var solution = require('../js/meanSquareError.js');


describe("Mean Square Error", function(){
  it("should return 9", function(){
    assert.equal(solution([1,2,3], [4,5,6]), 9);
  });

  it("should return 16.5", function(){
    assert.equal(solution([10, 20, 10, 2], [10, 25, 5, -2]), 16.5);
  });

  it("should return 1", function(){
    assert.equal(solution([-1,0], [0,-1]), 1);
  });

});

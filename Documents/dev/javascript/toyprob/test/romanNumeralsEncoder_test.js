var assert = require('chai').assert;
var solution = require('../js/romanNumeralsEncoder.js');

describe("Roman Numberals Encoder", function(){
  it("Basic Tests", function(){
    assert.equal(solution(1), 'I', '1 = I');
  });

  it("Basic Tests", function(){
    assert.equal(solution(4), 'IV', '4 = IV');
  });

  it("Basic Tests", function(){
    assert.equal(solution(1000), 'M', '1000 = M');
  });

  it("Basic Tests", function(){
    assert.equal(solution(1990), 'MCMXC', '1990 = MCMXC');
  });

  it("Basic Tests", function(){
    assert.equal(solution(2008), 'MMVIII', '2008 = MMVIII');
  });

  it("Basic Tests", function(){
    assert.equal(solution(1666), 'MDCLXVI', '1666 = MDCLXVI');
  });
});

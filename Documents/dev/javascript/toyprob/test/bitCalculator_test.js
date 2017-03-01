var assert = require('chai').assert;
var calculate = require('../js/bitCalculator.js');

describe("calculate",function(){
  it("should work for positive numbers",function(){
    assert.equal( calculate("1", "1"), 2 );
    assert.equal( calculate("10", "10"), 4 );
    assert.equal( calculate("10", "0"), 2 );
    assert.equal( calculate("10", "1"), 3 );
  });
});

var chai = require('chai');
var assert = chai.assert;
var multPrimefactorSum = require('../js/multPrimefactorSum.js');

describe("Basic Tests", function(){
  it("Ranges with Small Values", function(){
    assert.deepEqual(multPrimefactorSum(1, 60), [1, 4, 16, 27, 30, 60]);
    assert.deepEqual(multPrimefactorSum(10, 100), [16, 27, 30, 60, 70, 72, 84]);
    assert.deepEqual(multPrimefactorSum(80, 150), [84, 105, 150]);
    assert.deepEqual(multPrimefactorSum(90, 200), [105, 150, 180]);
  });
});

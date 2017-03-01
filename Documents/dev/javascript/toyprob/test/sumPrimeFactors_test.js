var chai = require('chai');
var assert = chai.assert;
var sflpfData = require('../js/sumPrimeFactors.js');

describe("Basic Tests", function(){
  it("Small Values for k and nMax", function(){
    assert.deepEqual(sflpfData(10, 100), [21, 25, 63]);
    assert.deepEqual(sflpfData(10, 200), [21, 25, 63, 105, 125, 147, 189]);
    assert.deepEqual(sflpfData(15, 150), [26, 52, 78, 104, 130]);
    assert.deepEqual(sflpfData(501, 1000), [998]);
    assert.deepEqual(sflpfData(501, 5000), [998, 1996, 2994, 3992, 4990]);
  });
});

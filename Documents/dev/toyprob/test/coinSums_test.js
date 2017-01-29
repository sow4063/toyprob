var assert = require('chai').assert;
var makeChange = require('../js/coinSums.js');

describe('coin sums', function(){
  it('Basic Tests', function(){
  	var coins = [1];
    assert.equal( makeChange(1, coins), 1 );

    coins = [1,2];
    assert.equal( makeChange(2, coins), 2 );
  });
});
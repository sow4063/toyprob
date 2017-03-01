var assert = require('chai').assert;
var nbrOfLaps =require('../js/twoJoggers.js');

describe('Two Joggers', function(){
  it('Basic Tests', function(){
    assert.deepEqual( nbrOfLaps(5, 3), [3, 5] );
    assert.deepEqual( nbrOfLaps(4, 6), [3, 2] );
  });
});

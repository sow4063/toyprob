var chai = require('chai');
var assert = chai.assert;
var bowlingScore = require('../js/bowlingScore.js');

describe('Bowling Score Calulator', function() {
  it('Basic Tests', function() {
    assert.equal( bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0 );
  });

  it('Basic Tests', function() {
    assert.equal( bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]), 190 );
  });

  it('Basic Tests', function() {
    assert.equal( bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 300 );
  });

  it('Basic Tests', function() {
    assert.equal( bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]), 11 );
  });

  it('Basic Tests', function() {
    assert.equal( bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]), 12 );
  });

});

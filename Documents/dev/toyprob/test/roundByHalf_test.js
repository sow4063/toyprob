var assert = require('chai').assert;
var solution = require('../js/roundByHalf.js');

describe('Round By 0.5 Steps', function() {
  it('Baisc Tests', function() {
    assert.equal(solution(4.2), 4 );
    assert.equal(solution(4.4), 4.5 );
    assert.equal(solution(4.6), 4.5 );
    assert.equal(solution(4.8), 5 );
  });
});

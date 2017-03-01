var assert = require('chai').assert;
var remainder = require('../js/findRemainder.js');

describe('Remainder Function', function(){
  it('Should handle arguments and math as defined in specificaitons', function(){
    assert.equal(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible.');
    assert.equal(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter.');
    assert.deepEqual(remainder(1, 0), NaN, 'Divide by zero should return NaN');
    assert.deepEqual(remainder(0, 0), NaN, 'Divide by zero should return NaN');
  });
});

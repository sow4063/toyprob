var assert = require('chai').assert;
var findNumber = require('../js/numberZoo.js');

describe('Numbe Zoo Patrol', function() {
  it('Basic Tests', function() {
    assert.equal( findNumber( [1,3]), 2 );
    assert.equal( findNumber( [2,3,4]), 1 );
    assert.equal( findNumber( [13,11,10,3,2,1,4,5,6,9,7,8] ), 12 );
  });
});

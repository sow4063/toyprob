var assert = require('chai').assert;
var lcm = require('../js/leastCommonMultiple.js');

describe('Least Common Multiple', function() {
  it('Basic Tests : 2 arguments', function() {
    assert.equal( lcm(2,5), 10 );
  });

  it('Basic Tests : 3 arguments', function() {
    assert.equal( lcm(2,3,4), 12 );
  });

  it('Basic Tests : 1 argument', function() {
    assert.equal( lcm(9),9);
  });

});

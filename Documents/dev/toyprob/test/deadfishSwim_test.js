var assert = require('chai').assert;
var parse = require('../js/deadfishSwim.js');

describe('Dead Fish Swim', function() {
  it('Basic Tests', function() {
    assert.deepEqual( parse( "iiisdoso" ), [ 8 , 64 ] );
  });
});

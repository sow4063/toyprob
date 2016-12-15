var assert = require('chai').assert;
var partitionOn = require('../js/partitionOn.js');

describe('PartitionOn', function() {
  var items = [1, 2, 3, 4, 5, 6];
  function isEven(n) {return n % 2 == 0}
  var i = partitionOn(isEven, items);

  it('Basic Tests', function() {
    assert.equal( i, 3 );
  });

  it('Basic Tests', function() {
    assert.deepEqual( items.slice(0, i), [1, 3, 5] );
  });

  it('Basic Tests', function() {
    assert.deepEqual( items.slice(i), [2, 4, 6] );
  });
});

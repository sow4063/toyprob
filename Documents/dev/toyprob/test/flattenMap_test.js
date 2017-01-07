var assert = require('chai').assert;
var flattenMap = require('../js/flattenMap.js');

describe('Flatten a Nested Map', function() {
  it('Basic Tests', function() {
    var input = {
      'a': {
        'b': {
          'c': 12,
          'd': 'Hello World'
        },
        'e': [1,2,3]
      }
    };
    var output = {
      'a/b/c': 12,
      'a/b/d': 'Hello World',
      'a/e': [1,2,3]
    };

    assert.deepEqual( flattenMap(input), output );
  });
});


var assert = require('chai').assert;
var extend = require('../js/objectExtend.js');

describe('Object Extend', function() {
  it('Basic Tests', function() {
    assert.deepEqual( extend( {a: 1, b: 2}, {c: 3} ), {a: 1, b: 2, c: 3} );
    assert.deepEqual( extend( {a: 1, b: 2}, {c: 3}, {d: 4} ), {a: 1, b: 2, c: 3, d: 4} );
    assert.deepEqual( extend( {a: 1, b: 2}, {a: 3, c: 3} ), {a: 1, b: 2, c: 3} );
    assert.deepEqual( extend( {a: false, b: null}, {a: true, b: 2, c: 3} ), {a: false, b: null, c: 3} );
  });
});

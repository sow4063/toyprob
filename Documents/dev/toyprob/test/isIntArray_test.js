var assert = require('chai').assert;
var isIntArray = require('../js/isIntArray.js');

describe('Is Integer Array?', function(){
  it('Basic Tests', function(){
    assert.equal( isIntArray([]), true );
    assert.equal( isIntArray([1, 2, 3, 4]), true );
    assert.equal( isIntArray([1, 2, 3, NaN]), false );
  });
});

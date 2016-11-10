var chai = require('chai');
var assert = chai.assert;
var snail = require('../js/snail.js');

describe('Snail Sort', function() {
  it('Basic Test', function(){
    assert.deepEqual( snail([]), [[]] );
  });

  it('Basic Test', function(){
    assert.deepEqual( snail([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,9,8,7,4,5] );
  });

  it('Basic Test', function(){
    assert.deepEqual( snail([[1,2,3],[8,9,4],[7,6,5]]), [1,2,3,4,5,6,7,8,9] );
  });
});

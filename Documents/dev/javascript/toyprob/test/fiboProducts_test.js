var assert = require('chai').assert;
var productFib = require('../js/fiboProducts.js');

describe('', function(){
  it('Basic Tests', function(){
    assert.deepEqual( productFib(4895), [55, 89, true] );
    assert.deepEqual( productFib(5895), [89, 144, false] );
    assert.deepEqual( productFib(74049690), [6765, 10946, true] );
    assert.deepEqual( productFib(84049690), [10946, 17711, false] );
    assert.deepEqual( productFib(193864606), [10946, 17711, true] );
    assert.deepEqual( productFib(447577), [610, 987, false] );
    assert.deepEqual( productFib(602070), [610, 987, true] );
  });
});

var assert = require('chai').assert;
var Primes = require('../js/nPrimeNumbers.js');

describe('First n Prime Numbers', function(){
  it('Basic Tests', function(){
    assert.deepEqual( Primes.first(1), [2] );
    assert.deepEqual( Primes.first(2), [2, 3] );
    assert.deepEqual( Primes.first(5), [2, 3, 5, 7, 11] );
    assert.deepEqual( Primes.first(20).slice(15,20), [53, 59, 61, 67, 71] );
    assert.equal( Primes.first(100)[99], 541 );
    assert.equal( Primes.first(80)[79], 409 );
  });
});

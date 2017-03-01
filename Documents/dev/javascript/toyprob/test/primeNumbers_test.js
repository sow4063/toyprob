var assert = require('chai').assert;
//var isPrime = require('../js/primeNumbers.js');
var getPrimes = require('../js/primeNumbers.js');

describe('Prime Numbers', function(){
  it('isPrime Tests', function(){
    assert.equal( isPrime(0), false );
    assert.equal( isPrime(1), false );
    assert.equal( isPrime(2), true );
    assert.equal( isPrime(3), true );
    assert.equal( isPrime(4), false );
    assert.equal( isPrime(5), true );
  });

  it('getPrimes Tests', function(){
    assert.equal( getPrimes(0, 0).join(), '' );
    assert.equal( getPrimes(0, 30).join(), '2,3,5,7,11,13,17,19,23,29' );
    assert.equal( getPrimes(30, 0).join(), '2,3,5,7,11,13,17,19,23,29' );
  });
});

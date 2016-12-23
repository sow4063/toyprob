// https://www.codewars.com/kata/prime-numbers

/*
Description:

Preface

A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
A more detailed description of prime numbers can be found at: http://en.wikipedia.org/wiki/Prime_number

The Problem

You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

isPrime(number)
Should return boolean true if prime, otherwise false

getPrimes(start, finish)
Should return a unique, sorted array of all primes in a given range (including the provided numbers,
if they're prime). Note: start does not need to be the larger number.

Sample Input:

isPrime(number)

isPrime(0); // === false
isPrime(1); // === false
isPrime(2); // === true
isPrime(3); // === true
isPrime(4); // === false
isPrime(5); // === true
getPrimes(start, finish)

getPrimes(0, 0); // === []
getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
*/

function isPrime(n) {
  if( n < 2 ) return false;
  for( var i = 2; i <= n/2; i++ ) {
    if( n % i === 0 )
      return false;
  }

  return true;
};

function getPrimes(start, finish) {
  var ret = [];
  var temp = finish;

  if( start > finish ) {
    temp = start;
    start = finish;
    finish = temp;
  }

  for( var i = start; i <= finish; i++ ) {
    if( isPrime(i) ) {
      ret.push(i);
    }
  }

  return ret;
};

module.exports = getPrimes;

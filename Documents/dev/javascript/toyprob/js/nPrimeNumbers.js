// https://www.codewars.com/kata/first-n-prime-numbers

/*
Description:

A prime number is an integer greater than 1 that is only evenly divisible by itself and 1.

Write your own Primes class with class method Primes.first(n) that returns an array of the first n prime numbers.

For example:

Primes.first(1)
# => [2]

Primes.first(2)
# => [2, 3]

Primes.first(5)
# => [2, 3, 5, 7, 11]

Primes.first(20).last(5)
# => [53, 59, 61, 67, 71]
*/

function isPrime(n) {
  if( n < 2 ) return false;
  for( var i = 2; i <= n/2; i++ ) {
    if( n % i === 0 )
      return false;
  }

  return true;
};

function Primes(){
  var list = [2, 3, 5, 7, 11, 13, 17];

  function addPrimes(n) {
    var i = list[list.length - 1];
    while( list.length < n ) {
      if( isPrime(++i) ) {
        list.push(i);
      }
    }
  };

  this.first = function(n) {

    if( list.length < n ) {
      addPrimes(n);
    }

    return list.slice(0, n);
  };

  this.last = function(n) {
    if( list.length < n ) {
      addPrimes(n);
    }
    return list.slice(n);
  };

};

var Primes = new Primes();

module.exports = Primes;

// best practice
function Primes() {
  this.primes = [2];

  this.first = function(n) {
    if (this.primes.length >= n) {
      return this.primes.slice(0, n)
    } else {
      var start = this.primes[this.primes.length - 1];
      for (start; this.primes.length < n; start++) {
        for (var i = 0; i < this.primes.length; i++) {
          var prime = false;
          if (start % this.primes[i] === 0) {
            break;
          } else {
            prime = true;
          }
        }
        if (prime) {this.primes.push(start)};
      }
    }
    return this.primes;
  }
}

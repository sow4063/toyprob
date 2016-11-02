// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

/*
The prime numbers are not regularly spaced.
For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2.
From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes:
3-5, 5-7, 11-13, 17-19, 29-31, 41-43

A prime gap of length n is a run of n-1 consecutive composite numbers
between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

We will write a function gap with parameters:

g (integer >= 2) which indicates the gap we are looking for

m (integer >= 2) which gives the start of the search (m inclusive)

n (integer >= m) which gives the end of the search (n inclusive)

In the example above gap(2, 2, 50) will return [3, 5] or (3, 5) or {3, 5} which
is the first pair between 2 and 50 with a 2-gap.

So this function should return the first pair of two prime numbers spaced with
a gap of g between the limits m, n if these numbers exist otherwise nil or null or
 None or Nothing (depending on the language). In C++ return in such a case {0, 0}.

Examples:

gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

gap(2, 5, 5) --> nil or in C++ {0, 0}

gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)

gap(6,100,110) --> nil or {0, 0} : between 100 and 110 we have 101, 103, 107, 109
but 101-107 is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.

Ref

https://en.wikipedia.org/wiki/Prime_gap
*/

// function gap(g, m, n) {
//   var arr = new Array(n-m);
//   var i = 2;
//
//   for( i = m; i <= n; i ++ ) {
//     arr[i] = i;
//   }
//
//   for( i = 2; i <= Math.sqrt(n); i++ ) {
//     if( arr[i] === 0 )
//       continue;
//     for( var j = i + i; j <= n; j += i ) {
//       arr[j] = 0;
//     }
//   }
//
//   arr = arr.filter(function(val) {
//     return val !== 0 && val > m;
//   });
//
//   console.log(arr);
//
//   for( i = 0; i < arr.length - 1; i++ ) {
//     if( arr[i] + g === arr[i + 1] )
//       return [arr[i], arr[i + 1] ];
//   }
//
//   return null;
//
// };

function isPrime(n) {
 if( isNaN(n) || !isFinite(n) || n % 1 || n < 2 )
  return false;

 if( n % 2 === 0 )
  return n === 2;

 if( n % 3 === 0 )
  return n === 3;

 var m = Math.sqrt(n);

 for( var i = 5; i <= m; i += 6 ) {
  if( n % i === 0 )
    return false;
  if( n % (i + 2) === 0 )
    return false;
 }

 return true;

};

function gap(g,m,n) {
  var prime = [];

  for(var i = m; i <= n; i++ ) {
    if( isPrime(i) )
      prime.push(i);
  }

  for( i = 0; i < prime.length - 1; i++ ) {
    if( prime[i] + g === prime[i + 1] )
      return [prime[i], prime[i + 1] ];
  }

  return null;

};

module.exports = gap;

// best practice
function gap(g, m, n) {
    var lastPrime = 0;
    var isPrime = function(x) {
      for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }

    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }

    return null;
}

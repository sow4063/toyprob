// https://www.codewars.com/kata/steps-in-primes/train/javascript

/*
The prime numbers are not regularly spaced.
For example from 2 to 3 the step is 1.
From 3 to 5 the step is 2. From 7 to 11 it is 4.
Between 2 and 50 we have the following pairs of 2-steps primes:

3, 5 - 5, 7, - 11, 13, - 17, 19, - 29, 31, - 41, 43

We will write a function step with parameters:

g (integer >= 2) which indicates the step we are looking for,
m (integer >= 2) which gives the start of the search (m inclusive),
n (integer >= m) which gives the end of the search (n inclusive)

In the example above step(2, 2, 50) will return [3, 5] which is the first pair between 2 and 50 with a 2-steps.
So this function should return the first pair of the two prime numbers spaced
with a step of g between the limits m, n if these g-steps prime numbers exist
otherwise nil or null or None or Nothing (depending on the language).
In C++ if there are no such primes return the pair {0, 0}.

Examples:

step(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}
step(2, 5, 5) --> nil or ... or {0, 0} in C++
step(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}
([193, 197] is also such a 2-steps primes between 130 and 200 but it's not the first pair).
step(6, 100, 110) --> [101, 107] though there is a prime between 101 and 107: 103; the pair 101-103 is a 2-step.

Note:

The idea of "step" is close to that of "gap" but it is not exactly the same.
For those interested they can have a look at http://mathworld.wolfram.com/PrimeGaps.html.
A "gap" is more restrictive: there must be no primes in between
(101-107 is a "step" but not a "gap". Next kata will be about "gaps":-).
*/

function isPrime(n) {
  for( var i = 2; i < n/2; i++ ) {
    if( n % i == 0 )
      return false;
  }

  return true;
};

function step(g,m,n) {

  var ret = [];

  for(var i = m; i <= n; i++) {
    if( isPrime(i) && isPrime(i + g ) ) {
      ret.push(i);
      ret.push(i+g);
      return ret;
    }
  }

  return null;

}

console.log(step(2,100,110), [101, 103]);
console.log(step(4,100,110), [103, 107]);
console.log(step(6,100,110), [101, 107]);
console.log(step(8,300,400), [359, 367]);
console.log(step(10,300,400), [307, 317]);
console.log(step(4,30000,100000),[30109, 30113]);

// best practice
function isPrime(n) {
  var r = Math.sqrt(n) | 0; // 정수형 표시
  for( var i = 2; i <= r && n % i; i++);
  return i > r;
}

function step(g, m, n) {
  for( var i = m; i <= n - g; i++ ) {
    if( isPrime2(i) && isPrime2(i + g) ) {
      return [i, i + g];
    };
  }

  return null;
}

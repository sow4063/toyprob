// https://www.codewars.com/kata/the-sum-of-the-first-and-the-last-prime-factor-make-chains-of-numbers/train/javascript

/*
Every positive integer number, that is not prime, may be decomposed in prime factors.

For example the prime factors of 20, are:

2, 2, and 5, because: 20 = 2 . 2 . 5

The first prime factor (the smallest one) of 20 is 2 and the last one (the largest one) is 5.
The sum of the first and the last prime factors, sflpf of 20 is: sflpf = 2 + 5 = 7

The number 998 is the only integer in the range [4, 1000] that has a value of 501 ,
so its sflpf equals to 501, but in the range [4, 5000] we will have more integers with sflpf = 501 and
are: 998, 1996, 2994, 3992, 4990.

We need a function sflpf_data()
(javascript: sflpfData()that receives two arguments, val as the value of sflpf and nMax as a limit,
and the function will output a sorted list of the numbers between 4 to nMax(included) that
have the same value of sflpf equals to val.

Let's see some cases:

(Advice:Try to discard primes in a fast way to have a more agile code)

Enjoy it!

*/

function primeFactor(n){
  var root = Math.sqrt(n);
  var result = arguments[1] || [];
  var x = 2;

  if( n % x ) {
   x = 3;
   while( ( n % x ) && ( ( x = x + 2 ) < root ) ) {

   }
  }

  x = ( x <= root ) ? x : n;

  result.push(x);

  return ( x === n ) ? result : primeFactor( n / x, result );
};

function sflpfData(k, nMax) {
  console.log(k, nMax);
  var results = [];

  for( let n = k + 1; n <= nMax; n++ ) {

    var primes = primeFactor(n);

    var min = Math.min(...primes);
    var max = Math.max(...primes);

    if( min + max === k ) {
      results.push(n);
    }

  }

  console.log(results);

  return results;
};

module.exports = sflpfData;

// best practice

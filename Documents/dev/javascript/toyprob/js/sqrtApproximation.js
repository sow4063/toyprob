// https://www.codewars.com/kata/sqrt-approximation/train/javascript

/*
We want to approximate the sqrt function. Usually this functions takes a
floating point number and returns another floating point number,
but in this kata we're going to work with integral numbers instead.

Your task is to write a function that takes an integer n and returns either

an integer k if n is a square number, such that k * k == n or
a range (k, k+1), such that k * k < n and n < (k+1) * (k+1).
Examples

Test.assertEqual  (sqrtApproximation(4), 2);
Test.assertSimilar(sqrtApproximation(5), [2, 3]));
Remarks

In dynamic languages, return either a single value or an array/list.
In Haskell, use Either.
*/

function sqrtApproximation(number) {
  if(number == 0 ) return 0;
  for( var i = 1; i < number; i++ ) {
    if( i * i == number )
      return i;
    else if( (i+1)*(i+1) > number )
      return [i, i+1];
  }
};

console.log(sqrtApproximation(4) == 2);
console.log(sqrtApproximation(5), [2, 3]);

// best practice
function sqrtApproximation(number) {
  for (var i = 0; number >= i*i; i++) if (i*i === number) return i
  return [i - 1, i]
}

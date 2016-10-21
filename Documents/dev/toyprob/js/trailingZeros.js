// https://www.codewars.com/kata/number-of-trailing-zeros-of-n/train/javascript

/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * 4 ... N

zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600
that has 2 trailing zeros 4790016(00)
Be careful 1000! has length of 2568 digital numbers.
*/

function zeros (n) {

  var nums = [];

  for( var i = 1; i < n; i++ ) {
    let pow = Math.pow(5,i);
    if( n >= pow)
      nums.push(pow);
    else
      break;
  }
  
  var count = 0;

  for( var i = 0; i < nums.length; i++ ) {
    if( n > i )
      count += Math.floor( n / nums[ i ] );
  }

  return count;
};

module.exports = zeros;

// best pratice
function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}

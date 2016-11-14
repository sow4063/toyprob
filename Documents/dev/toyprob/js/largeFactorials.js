// https://www.codewars.com/kata/large-factorials
/*
Description:

In mathematics, the factorial of integer 'n' is written as 'n!'.
It is equal to the product of n and every integer preceding it.
For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.
You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None.
In C++, return an empty string.

For positive numbers a full length number is expected for example,
return 25! = '15511210043330985984000000' as a String!

Note: 0! is always equal to 1. Negative values should return null or an empty string(in C++).

For more on Factorials : http://en.wikipedia.org/wiki/Factorial
*/

function factorial(n) {
  var result = new Array(1000);
  result[0] = 1;
  var res_size = 1;

  for( var i = 2; i <= n; i++ ) {
    res_size = multiply( i, result, res_size );
  }

  return result.reverse().join('');
};

function multiply( x, res, res_size ) {
  var carry = 0;

  for( var i = 0; i < res_size; i++ ) {
    var prod = res[i] * x + carry;
    res[i] = prod % 10;
    carry = parseInt( prod / 10 );
  }

  while( carry ) {
    res[res_size] = carry % 10;
    carry = parseInt( carry / 10 );
    res_size++;
  }

  return res_size;
};

module.exports = factorial;

// best practice
function BigInt(n) {
  this.digits = Array.isArray(n) ? n : n.toString().split('').reverse().map(Number);

  this.mulInt = function(n) {
    var digits = this.digits;
    var result = [];
    var carry = 0;
    for(var i = 0; i < digits.length; i++) {
      var prod = carry + n * digits[i];
      var d = prod % 10;
      carry = (prod - d) / 10;
      result.push(d);
    }
    if (carry > 0)
      result.push.apply(result, carry.toString().split('').reverse().map(Number));
    return new BigInt(result);
  }

  this.toString = function() {
    return this.digits.reverse().join('');
  }
}

function factorial(n) {
  var result = new BigInt(1);
  for(var i = 1; i <= n; i++)
    result = result.mulInt(i);
  return result.toString();
}

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

// This function finds factorial of large numbers and prints them
function factorial(n)
{
    var res = new Array(500);

    // Initialize result
    res[0] = 1;
    var res_size = 1;

    // Apply simple factorial formula n! = 1 * 2 * 3 * 4...*n
    for (var x=2; x<=n; x++)
        res_size = multiply(x, res, res_size);

    console.log('Factorial of given number is ');
    for (var i=res_size-1; i>=0; i--)
        console.log( res[i] );

    return res[res.length-1];
}

// This function multiplies x with the number represented by res[].
// res_size is size of res[] or number of digits in the number represented
// by res[]. This function uses simple school mathematics for multiplication.
// This function may value of res_size and returns the new value of res_size
function multiply( x, res, res_size ) {
  var carry = 0;  // Initialize carry

  // One by one multiply n with individual digits of res[]
  for (var i=0; i<res_size; i++)
  {
      var prod = res[i] * x + carry;
      res[i] = prod % 10;  // Store last digit of 'prod' in res[]
      carry  = parseInt(prod/10);    // Put rest in carry
  }

  // Put carry in res and increase result size
  while (carry)
  {
      res[res_size] = carry%10;
      carry = parseInt(carry/10);
      res_size++;
  }
  return res_size;
}

module.exports = factorial;

// best practice

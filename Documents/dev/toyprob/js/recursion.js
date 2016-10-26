
// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if( n < 0 ) return null;

  if( n <= 1 ) return 1;

  return n * factorial( n - 1 );
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if( array.length < 1 ) return 0;

  if( array.length === 1 )
    return array[0];

  return array[0] + sum( array.slice( 1 ) );
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

function flatten(){
  return [].slice.call(arguments).reduce(function(a,b){
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
  },[]);
};

// flatten version
// var arraySum = function(array) {
//
//   var arr = flatten( array );
//
//   if( arr.length < 1 ) return 0;
//
//   return arr[0] + arraySum( arr.slice( 1 ) );
// };

// for loop version
var arraySum = function(array) {
  var sum = 0;
  for( let i = 0; i < array.length; i++ ) {
    if( Array.isArray( array[i] ) )
      sum += arraySum( array[i] );
    else {
      sum += array[i];
    }
  }

  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {

  if( n === 1 )
    return false;

  if( n === 0 )
    return true;

  n = n < 0 ? n+2 : n-2;

  return isEven(n);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if( n <= 1 ) return 0;

  return n - 1 + sumBelow(n-1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
var exponent = function(base, exp) {};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {};

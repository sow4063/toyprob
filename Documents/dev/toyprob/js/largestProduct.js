// https://www.codewars.com/kata/largest-product-in-a-series/train/javascript

/*
Complete the greatestProduct method so that it'll find the greatest product of
five consecutive digits in the given string of numbers.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

Adapted from Project Euler.
*/

function greatestProduct(input) {
  var max = 0;
  for( var i = 0; i <= input.length - 5; i++ ) {
    var product = input.slice(i, i + 5).split('').reduce(function(tot, v){
      return tot * parseInt(v);
    }, 1);

    max = Math.max( product, max);
  }

  return max;
};

module.exports = greatestProduct;

// best practice
function greatestProduct(input) {
  return input.split('').reduce(function(max, d, i, a) {
    if (i > input.length - 5)
      return max;
    var prod = a.slice(i,i+5).reduce(function(prd, d) {return prd*parseInt(d,10)},1);
    return Math.max(max, prod);
  }, 0);
}

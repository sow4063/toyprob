// https://www.codewars.com/kata/find-the-remainder/train/javascript

/*
Write a function that accepts two arguments and returns the remainder after dividing the larger number
by the smaller number. Division by zero should return NaN. Arguments will both be integers.
*/

function remainder(a, b){
  var c = a % b;

  if( a > b ) {
    return c < 0 ? c + b : c;
  }
  else {
    c = b % a;
    return c < 0 ? c + a : c;
  }

};

module.exports = remainder;

// best practice
function remainder(a, b){
  return a > b ? a % b : b % a;
}

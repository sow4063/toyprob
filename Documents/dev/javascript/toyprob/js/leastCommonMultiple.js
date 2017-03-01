// https://www.codewars.com/kata/least-common-multiple

/*
Description:

Write a function that calculates the least common multiple of its arguments;
each argument is assumed to be a non-negative integer.
*/

var gcd = function(a, b) {
  while (b != 0) {
    var temp = a % b;
    a = b;
    b = temp;
  }
  return Math.abs(a);
};

var lcm = function () {

  var args = Array.prototype.slice.call(arguments);

  return args.reduce( function(a,b){
    return (a * b ) / gcd(a, b);
  });

};

module.exports = lcm;

// best practice
var lcm = function () {
  function gcd(a,b) {
    if (a == 0) return b;
    return gcd(b%a, a);
  }
  return Array.prototype.slice.apply(arguments).reduce(function(a,b) {return a*b / gcd(a,b);}, 1);
};

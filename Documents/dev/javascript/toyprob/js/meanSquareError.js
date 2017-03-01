// https://www.codewars.com/kata/mean-square-error

/*
Description:

Complete the function that

-. accepts two arrays of equal length.
-. compares the value each member in one array to the corresponding member in the other.
-. squares the absolute value difference between those two values.
-. returns the average of those squared absolute value difference between each member pair.
*/

var solution = function(firstArray, secondArray) {
  var sum = 0;

  for(var i = 0; i < firstArray.length; i++ ) {
    var val = firstArray[i] - secondArray[i];
    sum += val * val;
  }

  return sum / firstArray.length;
};

module.exports = solution;

// best practice
function solution(a, b) {
  return a.reduce(function(s, n, i) { return s + Math.pow(n - b[i], 2) }, 0) / a.length;
}

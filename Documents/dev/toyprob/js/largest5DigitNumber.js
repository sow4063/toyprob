// Largest 5 digit number in a series
// https://www.codewars.com/kata/largest-5-digit-number-in-a-series/train/javascript

/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number found
within the number given.. The number will be passed in as a string of only digits.
It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net

*/

function solution(digits){
  var k = 5;
  var largest = 0;

  for( var i = 0; i <= digits.length - k; i++ ) {
    var tempNum = parseInt( digits.slice( i, i + k ) );

    if( tempNum > largest ) {
      largest = tempNum;
    }
  }

  return largest;
};

module.exports = solution;

// best practice
function solution(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}

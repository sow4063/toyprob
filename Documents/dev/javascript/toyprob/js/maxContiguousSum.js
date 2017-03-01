// https://www.codewars.com/kata/maximum-contiguous-sum

/*
Description:

Given an unsorted array of integer values, find the maximum positive sum of any contiguous range within the array.

An array containing only negative values can return 0.
Your solution should be efficient enough to not throw a timeout exception.

Example:

maxContiguousSum([3, -4, 8, 7, -10, 19, -3]); // returns 24
maxContiguousSum([-8, -10, -12, -2, -3, 5]); // returns 5
Visual example:

[3, -4, 8, 7, -10, 19, -3]
       |_____________|
             ||
             \/
             24
*/

function maxContiguousSum (arr) {
  var max = 0;
  for( var i = 0; i < arr.length; i++ ) {
    for( var j = i; j < arr.length; j++ ) {
      var sum = arr.slice(i, j + 1).reduce(function(tot, v){ return tot + v;}, 0);
      if( sum > max )
        max = sum;
    }
  }
  return max;
};

module.exports = maxContiguousSum;

// best practice
function maxContiguousSum (arr) {
  return arr.reduce(function (acc, x) {
    var current = Math.max(0, acc[0] + x);
    return [current, Math.max(current, acc[1])]
  }, [0, 0])[1];
}

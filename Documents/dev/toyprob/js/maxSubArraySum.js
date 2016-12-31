// https://www.codewars.com/kata/maximum-subarray-sum/train/javascript

/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence
in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is
the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum.
Note that the empty list or array is also a valid sublist/subarray.
*/

function add(a, b) {
  return a + b;
};

var maxSequence = function(arr){
  if( !arr.length ) return 0;
  if( arr.length === 1 ) return arr[0] > 0 ? arr[0] : 0;

  var min_limit = -1000000;
  var max = arr.reduce(add, min_limit);

  max = Math.max( max, min_limit );

  for(var i = 0; i < arr.length; i++ ) {
    for(var j = i; j < arr.length; j++ ) {
      var tot = arr.slice(i, j + 1).reduce(add, 0 );
      max = Math.max( tot, max);
    }
  }

  return max;
};

module.exports = maxSequence;

// best practice
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

// clever
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

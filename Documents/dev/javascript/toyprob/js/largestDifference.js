// https://www.codewars.com/kata/largest-difference-in-increasing-indexes

/*
Description:

Summary: Write a function which takes an array data of numbers and
returns the largest difference in indexes j - i such that data[i] <= data[j]

Long Description:

The largestDifference takes an array of numbers. That array is not sorted.
Do not sort it or change the order of the elements in any way, or their values.

Consider all of the pairs of numbers in the array where the first one is less than or equal to the second one.

From these, find a pair where their positions in the array are farthest apart.

Return the difference between the indexes of the two array elements in this pair.

Example:

largestDifference([1,2,3]) ; // returns 2, because here j = 2 and i = 0 and 2 - 0 = 2
*/

var largestDifference = function(data) {
  var arr = [];
  for( var i = 0; i < data.length - 1; i++ ) {
    for( var j = i + 1; j < data.length; j++ ) {
      if( data[i] <= data[j] ) {
        arr.push(j - i);
      }
    }
  }

  return Math.max(0, ...arr);
};

module.exports = largestDifference;

// best practice
var largestDifference = function(data) {
  var result = 0;
  for(var i = 0; i < data.length; ++i) {
    for(var j = 1; j < data.length; ++j) {
      if (data[i] <= data[j]) {
        if(j-i > result)
          result = j-i;
      }
    }
  }
  return result;
};

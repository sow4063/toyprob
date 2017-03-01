// https://www.codewars.com/kata/two-sum/train/javascript

/*
Write a function that takes an array of numbers (integers for the tests) and
a target number. It should find two different items in the array that,
when added together, give the target value.
The indices of these items should then be returned in an array like so: [index1, index2].

For the purposes of this kata, some tests may have multiple answers;
any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater,
and all of the items will be numbers; target will always be the sum of
two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/
*/

function twoSum(arr, n) {
  var ret = [];

  for( var i = 0; i < arr.length - 1; i++ ) {
    for( var j = i + 1; j < arr.length; j++ ){
      if( arr[i] + arr[j] == n ) {
        ret.push(i);
        ret.push(j);
        return [i,j];
      }
    }
  }
};

console.log(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
console.log(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
console.log(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]);

// best practice
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length-1; i++) {
      for (var j = i+1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === target) return [i, j];
      }
  }
}

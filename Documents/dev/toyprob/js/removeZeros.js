// https://www.codewars.com/kata/remove-zeros/train/javascript

/*
Write a function that takes an array of values and moves all elements that
are zero to the end of the array, otherwise preserving the order of the array.
The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0".
Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects.
You are also not allowed to use any Array.prototype or Object.prototype methods.
ALGORITHMS / ARRAYS / SORTING
*/

function destructuringSwap(list, iA, iB){
  [list[iA], list[iB]] = [list[iB], list[iA]];
  return list;
};

// destructuringSwap([1,2,5,4,3], 2, 4)
// -> [1,2,3,4,5]

function removeZeros(arr) {
  return arr.filter(function(value){return value !== 0}).concat(arr.filter(function(value) {return value === 0;}));
};

var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
var solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];

console.log(JSON.stringify(removeZeros(input)), JSON.stringify(solution));

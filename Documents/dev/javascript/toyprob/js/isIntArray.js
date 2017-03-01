// https://www.codewars.com/kata/is-integer-array/train/javascript

/*
Write a function isIntArray with the below signature.

function isIntArray(arr) {
    return true;
}
returns true if every element in an array is an integer.
returns true if array is empty.
returns false for every other input.
*/

function isIntArray(arr) {
  if( arr === '' || arr === null || arr === undefined || (typeof arr === 'number' && isNaN(arr) ) ) return false;
  if( !arr || arr.length === 0 ) return true;

  return arr.filter(function(v){
    return isNaN(parseInt(v)) || parseInt(v) !== v;
  }).length ? false : true;
};

module.exports = isIntArray;

// best practice
function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}

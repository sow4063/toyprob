// https://www.codewars.com/kata/return-the-missing-element/train/javascript

/*
Fellow code warrior, we need your help! We seem to have lost one of our array elements,
and we need your help to retrieve it! Our array, superImportantArray,
was supposed to contain all of the integers from 0 to 9 (in no particular order),
but one of them seems to be missing.

Write a function called getMissingElement that accepts an array of unique integers
between 0 and 9 (inclusive), and returns the missing element.

Examples:

getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3
*/

function getMissingElement(arr){
  var sum = arr.reduce(function(a,b) {
    return a + b;
  }, 0);

  return 45 - sum;
};

module.exports = getMissingElement;

// best practice
function getMissingElement(superImportantArray) {
  return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
}

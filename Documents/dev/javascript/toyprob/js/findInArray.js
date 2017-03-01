// https://www.codewars.com/kata/find-within-array/train/javascript

/*
Let's make an advanced version of Array.indexOf. We'll create a function that takes in two parameters:

an array (length and types of items are irrelevant), and
a function (value, index) that will be called on members of the array.
The function will return either true or false.
Your function will iterate through the members of the array in order until the provided iterator function returns true;
at which point your function will return that item's index.

If the iterator function returns false for all members of the array, your function should return -1.

var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3
*/

var findInArray = function(array, iterator) {
  var result = -1;
  for( var i = 0; i < array.length; i++ ) {
    if( iterator( array[i], i ) ) {
      result = i;
      break;
    }
  }

  return result;
};

module.exports = findInArray;

// best practice
var findInArray = function(array, iterator) {
  return array.map(iterator).indexOf(true);
};

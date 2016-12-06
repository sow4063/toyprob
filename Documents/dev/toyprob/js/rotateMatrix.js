// https://www.codewars.com/kata/rotate-an-array-matrix/train/javascript

/*
Write a rotate function that rotates a two-dimensional array (a matrix) either clockwise or
anti-clockwise by 90 degrees, and returns the rotated array.

The function accepts two parameters: an array, and a string specifying the direction or rotation.
The direction will be either "clockwise" or "counter-clockwise".

Here is an example of how your function will be used:

var matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]];

rotate(matrix, "clockwise"); // Would return  [[7, 4, 1], [8, 5, 2],  [9, 6, 3]]

To help you visualize the rotated matrix, here it is formatted as a grid:

 [[7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]]

Rotated counter-clockwise it would looks like this:

 [[3, 6, 9],
  [2, 5, 8],
  [1, 4, 7]]

The two-dimensional array that is passed to the function may have any number of elements ("rows"),
each of which will contain an identical number of elements ("columns").
*/

function rotate(matrix, direction) {
  var results = [];
  var arr = [];

  if( direction === 'clockwise' ) {
    while( matrix[0].length ) {
      arr = [];
      for( var i = matrix.length - 1; i >= 0; i-- ) {
        arr.push( matrix[i].shift() );
      }

      results.push( arr );
    }

  }
  else {
    while( matrix[0].length ) {
      arr = [];
      for( var i = 0; i < matrix.length; i++ ) {
        arr.push( matrix[i].pop() );
      }

      results.push( arr );
    }
  }

  return results;
};

module.exports = rotate;

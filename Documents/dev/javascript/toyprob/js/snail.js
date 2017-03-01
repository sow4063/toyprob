// https://www.codewars.com/kata/snail/train/javascript

/*
Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element,
traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]

snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]

snail(array) #=> [1,2,3,4,5,6,7,8,9]

This image will illustrate things more clearly:

NOTE: The idea is not sort the elements from the lowest value to the highest;
the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as [[]]
*/

function flatten(){
  return [].slice.call(arguments).reduce(function(a,b){
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
  },[]);
};

snail = function(array) {
  var results = [];

  while( array.length ) {
      // top
      results = results.concat( array.splice(0, 1) );

      // right
      for( var i = 0; i < array.length; i++ ) {
        results = results.concat( array[i].splice( array[i].length - 1, 1 ) );
      }

      // bottom
      var arr = flatten(array.splice(-1, 1)).reverse();
      results = results.concat( arr );

      // left
      for( var i = array.length - 1; i >= 0; i-- ) {
        results = results.concat( array[i].splice( 0, 1 ) );
      }

  }

  return results.length === 0 ? [[]] : flatten(results);
};

module.exports = snail;

// best practice
snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}

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

function swapArray(arr,idx) {
  var v = arr[idx];
  for(var i = idx; i < arr.length; i++ ) {
    arr[i] = arr[i+1];
  }

  arr[arr.length-1] = v;
};

function removeZeros(array) {
  var cnt = 0;
  for( var j = 0; j < array.length - cnt; j++ ) {
    if( array[j] === 0 || array[j] === "0" ) {
      swapArray(array, j);
      cnt++;
      if( array[j] === 0 || array[j] === "0" )
        j -= 1;
    }
  }
  return array;
};

var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
var solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];

console.log(JSON.stringify(removeZeros(input)), JSON.stringify(solution));

// best practice
function removeZeros(array) {
    var end = array.length;
    for (var i = 0; i < end; i++) {
        if (array[i] === 0 || array[i] === "0") {
            arrayShiftToEnd(array, i);
            i--;
            end--;
        }
    }
    return array;
}

function arrayShiftToEnd(array, n) {
    var end = array[n]
    for(var i = n; i <  array.length; i++) {
        array[i] = array[i + 1]
    }
    array[array.length - 1] = end;

    return array
}

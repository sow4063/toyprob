//https://www.codewars.com/kata/pascals-triangle/train/javascript

/*
Pascal's Triangle

Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle

Write a function that, given a depth (n), returns a single-dimensional array
representing Pascal's Triangle to the n-th level.

For example:

pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
*/

function pascalsTriangle(n) {
  var res = [];
  var ans = [];

  for (var i = 1; i <= n; ++i) {
    var arr = [];
    for (var j = 0; j < i; ++j) {
      var val = j == 0 || j == i - 1 ? 1 : res[i-2][j-1] + res[i-2][j];
      arr.push(val);
      ans.push(val);
    }
    res.push(arr);
  }
  return ans;
};

console.log(pascal(1), [1]);
console.log(pascal(2), [1,1,1]);
console.log(pascal(3), [1,1,1,1,2,1]);
console.log(pascal(4), [1,1,1,1,2,1,1,3,3,1]);
console.log(pascal(5), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1]);

// best practice
function pascalsTriangle(n) {
  var pascal = [];
  var idx = 0;

  for ( var i = 0; i < n; i++ ) {
    idx = pascal.length - i;
    for ( var j = 0; j < i+1; j++ ) {
      if ( j === 0 || j === i ) {
        pascal.push(1);
      } else {
        pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
      }
    }
  }

  return pascal;
};

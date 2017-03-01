// https://www.codewars.com/kata/pascals-triangle-number-2

/*
Description:

Here you will create the classic pascal's triangle.
Your function will be passed the depth of the triangle and
you code has to return the corresponding pascal triangle upto that depth

The triangle should be returned as a nested array.

for example:

pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
To build the triangle, start with a single 1 at the top,
for each number in the next row you just take the two numbers above it and
add them together (except for the edges, which are all "1"). eg

          [1]
        [1   1]
       [1  2  1]
      [1  3  3  1]
here you get the 3 by adding the 2 and 1 above it.
*/
function PascalTriangle(n)
{
    var arr = new Array(n+1);

    if(n == 0)
    {
        arr[0] = 1;
        return arr;
    }

    var last = PascalTriangle(n-1);

    arr[0] = 1;
    arr[n] = 1;

    for( var i = 1; i < last.length; i++ ) {
      arr[i] = last[i-1] + last[i];
    }

    return arr;
};

const printArray = a => `[${a.map(e => Array.isArray(e) ? printArray(e) : e).join(',')}]`;

function pascal(depth) {

  var result = [];

  for( var cnt = 0; cnt < depth; cnt++ ) {
    let elm = PascalTriangle(cnt);
    result.push(elm);
  }

  return printArray(result);

};

console.log(pascal(1), [[1]]);
console.log(pascal(2), [[1],[1,1]]);
console.log(pascal(3), [[1],[1,1],[1,2,1]]);
console.log(pascal(4), [[1],[1,1],[1,2,1],[1,3,3,1]]);
console.log(pascal(5), [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);

// best practice
function pascal(depth) {
  var result = [];
  for (var i = 1; i <= depth; ++i) {
    var row = [];
    for (var j = 0; j < i; ++j) {
      row.push(j == 0 || j == i - 1 ? 1 : result[i-2][j-1] + result[i-2][j]);
    }
    result.push(row);
  }
  return result;
};

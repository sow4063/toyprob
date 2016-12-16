// https://www.codewars.com/kata/square-matrix-multiplication/train/javascript

/*
Write a function that accepts two square (nxn) matrices (two dimensional arrays), and
returns the product of the two. Only square matrices will be passed in.

How to multiply two square matrices:

We are given two matrices, A and B, of size 2x2 (Kata tests are not limited to 2x2).
Matrix C, the solution, will be equal to the product of A and B. To fill in cell [ 0 ][ 0 ] of matrix C,
you need to compute: A[0][0] * B[0][0] + A[0][1] * B[1][0].

More general: To fill in cell [ i ][ j ] of matrix C, you need to first multiply the elements in
the i'th row of matrix A by the elements in the j'th column of matrix B, then take the sum of all those products.
This will give you the value for cell [ i ][ j ] in matrix C.

Example(Matrix A * Matrix B = Matrix C):
|1 2|
|3 2|
*
|3 2|
|1 1|
=
|5 4 |
|11 8|

Calculating the above C values:
C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] = 1 * 3 + 2 * 1 = 5

C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] = 1 * 2+ 2 * 1 = 4

C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] = 3 * 3 + 2 * 1 = 11

C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] = 3 * 2 + 2 * 1 = 8

Link to Wikipedia explaining matrix multiplication (look at the square matrix example):
http://en.wikipedia.org/wiki/Matrix_multiplication#Examples_2
*/

function matrixMultiplication(a, b){
  var d = [];

  while( b[0].length ) {
    var c = [];
    for( var i = 0; i < b.length; i++ ) {
    c.push( b[i].shift() );
    }

    d.push(c);
  }

  var result = [];

  for( var i = 0; i < a.length; i++ ) {
    c = [];
    for( var j = 0; j < d.length; j++ ) {
      v = 0;
      for( var k = 0; k < d[j].length; k++ ) {
        v += a[i][k] * d[j][k];
      }
      c.push(v);
    }

    result.push(c);
  }

  return result;

};

module.exports = matrixMultiplication;

// best practice
function matrixMultiplication(a,b){
  return a.map(function(row){
      return row.map(function(_,i){
          return row.reduce(function(sum,cell,j){
              return sum+cell*b[j][i];
          },0);
      });
  });
}

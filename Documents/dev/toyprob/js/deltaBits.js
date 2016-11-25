// https://www.codewars.com/kata/538948d4daea7dc4d200023f

/*
Description:

Write a function convertBits to determine the number of bits required
to convert positive integer A to positive integer B.

For example, you can change 31 to 14 by flipping the 4th and 0th bit:

 31  0 0 0 1 1 1 1 1
 14  0 0 0 0 1 1 1 0
---  ---------------
bit  7 6 5 4 3 2 1 0

Thus 31 and 14 should return 2.
*/

function convertBits(a, b){
  a = a.toString(2).split('').join('');
  b = b.toString(2).split('').join('');

  var max = a.length > b.length ? a.length : b.length;

  // zero padding
  a = ('0'.repeat(max).substr(a.length) + a).split('');
  b = ('0'.repeat(max).substr(b.length) + b).split('');

  var cnt = 0;
  while( a.length ) {
    if( a.pop() !== b.pop())
      cnt++;
  }

  return cnt;
};

module.exports = convertBits;

// best practice
function convertBits(a, b){
  var x = a ^ b, count = 0;
  do { count += x & 1 } while (x >>= 1);
  return count;
}

// clever
function convertBits(a, b){
  return ((a^b).toString(2).match(/1/g)||[]).length
}

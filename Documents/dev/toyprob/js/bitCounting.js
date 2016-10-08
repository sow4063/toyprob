// https://www.codewars.com/kata/bit-counting/train/javascript

/*
Write a function that takes an (unsigned) integer as input,
and returns the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

function countBits(int) {
  var str = Number(int).toString(2);
  var sum = 0;

  for( var val of str ) {
    sum += parseInt(val);
  }

  return sum;

};

function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
};

function countBits(n) {
  return n.toString(2).split('0').join('').length;
};

var countBits = function(n) {
  return n !== 0 ? n.toString(2).match(/1/g).length:0;
};

console.log( countBits(1234) );

// https://www.codewars.com/kata/52654ea8e218b83553000666

/*
Description:

Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:
toBinaryString(6) should return "110" (no leading 0).

Use of the native method
number.toString(2);
is disallowed.
*/

function toBinaryString(n){
  if( n === 0 ) return '0';
  var binary = [];

  while( n >= 1 ) {
    binary.unshift( n % 2 );
    n = Math.floor( n / 2 );
  }

  return binary.join('');
};

module.exports = toBinaryString;

// best practice
function toBinaryString(number){
  var r = '';
  do {
    r = (number & 1) + r;
    number >>= 1;
  } while(number);
  return r;
}

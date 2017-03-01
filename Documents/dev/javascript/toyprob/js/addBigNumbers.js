// Adding Big Numbers
// https://www.codewars.com/kata/adding-big-numbers/train/javascript
/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers.
The input numbers are strings and the function must return a string.

Example

add("123", "321"); -> "444"
add("11", "99"); -> "110"
Notes

The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a,b) {

  var numbers = [].slice.call(arguments);
  var res = '';
  var max = 0;
  var int = 0;

  numbers = numbers.map(function(num) {

    num = (num + '').split('');

    while( num[0] === '0' )
      num.shift();

    if( max < num.length )
      max = num.length;

    return num.reverse();
  } );

  for( var idx = 0; idx < max; idx++ ) {
    numbers.forEach(function(num) {
      int += num[idx] | 0;
    });

    res = int % 10 + '' + res;
    int = int / 10 | 0;
  }

  return ( int ? int + '' + res : res ) || '0';
};

module.exports = add;

// best practice
function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}

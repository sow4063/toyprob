// https://www.codewars.com/kata/reverse-or-rotate/train/javascript

/*
The input is a string str of digits.
Cut the string into chunks of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2,
reverse it; otherwise rotate it to the left by one position.
Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> ""
*/

function revrot(str, sz) {
  if( str.length < 1 )
    return "";

  if( sz < 1 || sz > str.length )
    return "";

  var start = 0;
  var end = sz;
  var arr = [];

  // cut the string.
  while( 1 ) {
    arr.push( str.slice( start, end ) );
    if( end + sz > str.length - 1 ) {
      break;
    }
    start = end;
    end += sz;
  }

  var text = "";

  for( var i = 0; i < arr.length; i++ ) {

    var sum = 0;

    for( var j = 0; j < sz; j++ ) {
      var num = Number( arr[i][j] );
      sum += ( num * num * num );
    }

    if( sum % 2 == 0 ) {
      text += arr[i].split("").reverse().join("");
    }
    else {
      text += arr[i].slice(1,arr[i].length) + arr[i][0];
    }

  }

  return text;

};

module.exports = revrot;

// best practice
function revrot(str, sz) {
  if (sz < 1 || sz > str.length)
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0);

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}

// https://www.codewars.com/kata/5269452810342858ec000951

/*
Description:

You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534".
The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative.
Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following symbols (including space after comma) -, .

There should be no space between the minus "-" sign and the digit after it.

Here are some valid coordinates:

-23, 25
24.53525235, 23.45235
04, -23.234235
43.91343345, 143
4, -3
And some invalid ones:

23.234, - 23.4234
2342.43536, 34.324236
N23.43345, E32.6457
99.234, 12.324
6.325624, 43.34345.345
0, 1,2
0.342q0832, 1.2324
23.245, 1e1
*/

function isLetter(str) {
  var pattern = /[a-zA-Z]/;
  return pattern.test(str);
};

function isValidCoordinates(a){
  a = a.split(',');

  if( a.length > 2 ) {
    return false;
  }

  if( isLetter(a[0]) || isLetter(a[1]) )
    return false;

  // Latitude
  var num = Math.abs(Number(a[0]));
  if( num > 90 || num < 0 )
    return false;

  // Longitude
  num = Math.abs(Number(a[1]));
  if( isNaN(a[0]) || isNaN(a[1]) )
    return false;

  if( num > 180 || num < 0 )
    return false;

  if( a[1].indexOf('- ') !== -1 ) {
    return false;
  }

  return true;
};

module.exports = isValidCoordinates;

// best practice
function isValidCoordinates(coordinates){
  var match = coordinates.match(/^[-]?(\d+(?:\.\d+)?), [-]?(\d+(?:\.\d+)?)$/);
  if (!match) { return false; }
  var lat = Math.abs(parseFloat(match[1]));
  var lng = Math.abs(parseFloat(match[2]));
  return lat >= 0 && lat <= 90 && lng >= 0 && lng <= 180;
}

// https://www.codewars.com/kata/convert-a-hex-string-to-rgb/train/javascript

/*
When working with color values in JavaScript it can sometimes be useful to extract the individual
red, green, and blue (RGB) component values for a color.
Implement a hexStringToRGB() function that meets these requirements:

Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
Returns an object with the structure {r:255, g:153, b:51} where r, g, and b range from 0 through 255
Note, your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF").

Example

hexStringToRGB("#FF9933") // returns {r:255, g:153, b:51}
*/

function hexToDec(hex) {
  var obj = {'a':10, 'b':11, 'c':12, 'd':13, 'e':14, 'f':15};

  var sum = ( obj[hex[0].toLowerCase()] ? obj[hex[0].toLowerCase()] : parseInt(hex[0]) ) * 16;
  sum += obj[hex[1].toLowerCase()] ? obj[hex[1].toLowerCase()] : parseInt(hex[1]);
  return sum;
};

function hexStringToRGB(hexString) {
  var obj = {};
  obj['r'] = hexToDec( hexString.substr(1, 2) );
  obj['g'] = hexToDec( hexString.substr(3, 2) );
  obj['b'] = hexToDec( hexString.substr(5, 2) );

  return obj;
};

module.exports = hexStringToRGB;

// best practice
function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1,3), 16),
    g: parseInt(h.slice(3,5), 16),
    b: parseInt(h.slice(5,7), 16)
  };
}

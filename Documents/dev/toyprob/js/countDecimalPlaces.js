// https://www.codewars.com/kata/count-decimal-places/train/javascript

/*
Can you write an algorithm to determine the number of decimal places of a number?

decimalPlaces(3.14); //yields 2
decimalPlaces(2.e-14); //yields 14
decimalPlaces(-3.14e-21); //yields 23
decimalPlaces(10.75); //yields 2
decimalPlaces(NaN); //yields 0
decimalPlaces(Infinity); //yields 0
Consider the decimal places to be the number of digits after the decimal separator 
when the number is expressed in ordinary decimal notation.
*/

function decimalPlaces(n) {
  var str = n.toString();
  if( str.indexOf('.') !== -1 )
    if( str.indexOf('e-') !== -1 ) {
      n = parseInt(str.split('e-')[1]);
      n += str.split('e-')[0].split('.')[1].length;
    }
    else
      n = str.split('.')[1].length;
  else {
    if( str.indexOf('e-') !== -1 ) {
      n = parseInt(str.split('e-')[1]);
    }
    else
      n = 0;
  }
  return n || 0;
};

module.exports = decimalPlaces;

// best practice
function decimalPlaces(n) {
  var r = 0, d = n;
  while(d - Math.floor(d) > 0) {
    r++;
    d = n * Math.pow(10, r);
  }
  return r;
}

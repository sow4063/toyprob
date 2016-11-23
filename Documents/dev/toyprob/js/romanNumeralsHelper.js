// https://www.codewars.com/kata/roman-numerals-helper/train/javascript

/*
Create a RomanNumerals helper that can convert a roman numeral to and from an integer value.
The class should follow the API demonstrated in the examples below.
 Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit
and skipping any digit with a value of zero.

In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII.
1666 uses each Roman symbol in descending order: MDCLXVI.

Examples:

RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
*/

function RomanNumeralsHelper() {
};

RomanNumeralsHelper.prototype.toRoman = function(num) {
  var roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

  var result = '';

  while( num > 0 ) {

    for( key in roman ) {
      if( roman[key] <= num ) {
        result += key;
        num -= roman[key];
        break;
      }

    }
  }

  return result;
};

RomanNumeralsHelper.prototype.fromRoman = function(roman) {
  var nums = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };

  var arr = roman.split('');
  var ans = 0;

  while( arr.length ) {
    if( nums[ arr.slice(0, 2).join('') ] ) {
      ans += nums[ arr.splice(0, 2).join('') ];
    }
    else {
      ans += nums[ arr.splice(0,1).join('') ];
    }
  }

  return ans;
};

var RomanNumerals = new RomanNumeralsHelper();

module.exports = RomanNumerals;

// best practice
var numerals = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
];

RomanNumerals = {
  toRoman: function(v) {
    var s = '';
    numerals.forEach(function(n) {
      while (v >= n[1]) {
        s += n[0];
        v -= n[1];
      }
    });
    return s;
  },
  fromRoman: function(s) {
    var v = 0;
    numerals.forEach(function(n) {
      while (s.substr(0, n[0].length) == n[0]) {
        s = s.substr(n[0].length);
        v += n[1];
      }
    });
    return v;
  }
};

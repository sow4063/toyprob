// https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

/*
Given the string representations of two integers,
return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) {
  var results = '';
  var sum = 0;

  a = a.split('');
  b = b.split('');

  while( a.length || b.length || sum ) {
    sum += ~~a.pop() + ~~b.pop();
    results = sum % 10 + results;
    sum = sum > 9;
  }

  return results.replace(/^0+/, '');
};

module.exports = sumStrings;

// best practice
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}

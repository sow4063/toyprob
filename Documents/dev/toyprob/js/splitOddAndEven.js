// https://www.codewars.com/kata/t-dot-t-t-dot-17-split-odd-and-even/train/javascript
/*
Complete function splitOddAndEven, accept a number n(n>0),
return an array that contais the continuous parts of odd or even digits.

Please don't think about digit 0, it won't appear ;-)
*/

function splitOddAndEven(n) {
  var arr = n.toString().split('');
  var mod = arr[0] % 2;
  var str = arr[0];

  for(var i = 1; i < arr.length; i++ ) {
    if( arr[i] % 2 == mod ) {
      str += arr[i];
    }
    else {
      str += ',';
      str += arr[i];
    }

    mod = arr[i] % 2;

  }
  var result = [];
  var ar = str.split(',');
  for( var i = 0; i < ar.length; i++ ) {
    result.push(Number(ar[i]));
  }
  return result;
};

console.log(splitOddAndEven(123)  ,  [1,2,3]);
console.log(splitOddAndEven(223)  ,  [22,3]);
console.log(splitOddAndEven(111)  ,  [111]);
console.log(splitOddAndEven(13579)  ,  [13579]);
console.log(splitOddAndEven(135246)  ,  [135,246]);
console.log(splitOddAndEven(123456)  ,  [1,2,3,4,5,6]);

// best practice
function splitOddAndEven(n) {
  return (n+"").match(/[13579]+|[2468]+/g).map(x=>+x)
};

// https://www.codewars.com/kata/odd-slash-even-number-of-divisors

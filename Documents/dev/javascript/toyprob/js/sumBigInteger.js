// https://www.codewars.com/kata/big-integers-sum/train/javascript

/*
Description:

Sum two integers, what would be easier? And what about the really big summands? Create your function,
that will be able to take two or more integers as arguments and return their sum.

Result must be a string
1-digit to 500-digit integers
Only integers greater than or equal to zero
No exponent notation
Variable number of arguments (omitted arguments = zero result)
Big integers will be represented as strings
Leading zeros are possible and must be taken in account
ALGORITHMS / MATHEMATICS / NUMBERS
*/

function sum() {

  if(arguments.length == 0 ) return '0';

  var maxlen = 0;

  for(var i = 0; i < arguments.length; i++ ) {
    if(arguments[i].toString().length > maxlen)
      maxlen = arguments[i].toString().length;
  }

  var arr = new Array(maxlen+1).fill(0);

  for(var i = 0; i < arguments.length; i++ ) {
     var reversed = arguments[i].toString().split('').reverse();
     for( var j = 0; j < reversed.length; j++) {
      var sum = arr[j] + Number(reversed[j]);
       arr[j] = sum % 10;
       if( sum >= 10 )
          arr[j+1] += 1;
     }

  }

  var result = arr.reverse().join('');
  if( Number(result) != 0 ) {
    result = result.replace(/^0+/, '');
  }
  else {
    result = '0';
  }

  return result;
};

console.log(sum(1, 2, 3) == '6', 'Wrong!');
console.log(sum('123456789', 2) == '123456791', 'Oops!');
console.log(sum(0) == '0', 'Nay!');
console.log(sum('26171360011523479938568768502879102014147610585267',
                '54919452849484813416645827897741122706922510451922',
                '60978868971705293697898250181738038209826232123376',
                '69860150841064476785098792603416150336620574263611',
                '56168902810711637957516052113619714978796129638861'
          ) == '268098735484489701795727691299394128246313057063037', 'Nope!');

// best practice
function sum() {
  var nums = [].slice.call(arguments),
    res = '',
    max = 0,
    pos = 0,
    int = 0;
  nums = nums.map(function(num) {
    num = (num + '').split('');
    while (num[0] === '0') num.shift();
    if (max < num.length) max = num.length;
    return num.reverse();
  });
  for (; pos < max; pos++) {
    nums.forEach(function(num) {
      int += num[pos] | 0;
    });
    res = int % 10 + '' + res;
    int = int / 10 | 0;
  }
  return (int ? int + '' + res : res) || '0';
}

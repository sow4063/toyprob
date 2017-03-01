// https://www.codewars.com/kata/52ece9de44751a64dc0001d9

/*
Description:

In this kata your task is to create bit calculator.
Function arguments are two bit representation of numbers ("101","1","10"...),
and you must return their sum in decimal representation.

Test.expect(calculate("10","10") == 4);
Test.expect(calculate("10","0") == 2);
Test.expect(calculate("101","10") == 7);

parseInt and some Math functions are disabled.

Those Math functions are enabled: pow,round,random
*/

function calculate(num1,num2){
  var a = num1.split('').reverse();
  var b = num2.split('').reverse();

  var sum = 0;
  for( var i = a.length - 1; i >= 0 ; i-- ) {
    sum += a[i] * Math.pow(2, i);
  }

  for( var i = b.length - 1; i >= 0 ; i-- ) {
    sum += b[i] * Math.pow(2, i);
  }

  return sum;
};

module.exports = calculate;

// best practice
function calculate(num1,num2){
   return binaryToDecimal(num1)+binaryToDecimal(num2);
}

function binaryToDecimal(b){
    var arr = b.split('');
    var d = 0;
    for (var i = arr.length, j = 0; i > 0; i--, j++){
       if (arr[i-1] == 1){d += Math.pow(2, j)}
    }
    return d;
}

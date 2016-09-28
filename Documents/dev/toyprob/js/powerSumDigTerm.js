// https://www.codewars.com/kata/numbers-that-are-a-power-of-their-sum-of-digits/train/javascript

/*
The number 81 has a special property, a certain power of the sum of its digits is
equal to 81 (nine squared). Eighty one (81), is the first number in having
this property (not considering numbers of one digit).
The next one, is 512. Let's see both cases with the details

8 + 1 = 9 and 92 = 81

512 = 5 + 1 + 2 = 8 and 83 = 512

We need to make a function, power_sumDigTerm(), that receives a number n and
may output the n-th term of this sequence of numbers.
The cases we presented above means that

power_sumDigTerm(1) == 81

power_sumDigTerm(2) == 512

Happy coding!
*/

function powerSumDigTerm(n) {
  var arr = [];

  for (var b = 7; b < 400; b++) {
      var value = b;
      for (var e = 2; e < 50; e++) {
          value *= b;
          var sum = (''+value).split('').reduce(function(a,b){return parseInt(a)+parseInt(b)});
          if (sum == b) {
              arr.push(value);
          }
          if (arr.length >= n*3) break;
      }
      if (arr.length >= n*3) break;
  }

  arr.sort(function(a,b){return a-b});
  console.log(arr);
  return arr[n-1];
};

// best practice
let series = [0];
for (let a = 2; a < 100; a++) {
  for (let b = 2; b < 42; b++) {
    let c = Math.pow(a, b);
    if (c.toString().split('').reduce((x,y) => x + parseInt(y), 0) === a) {
      series.push(c);
    }
  }
}
series = series.sort((a, b) => a - b);
var powerSumDigTerm2 = n => series[n];

console.log('result = ', powerSumDigTerm2(1), 81);
console.log('result = ', powerSumDigTerm2(2), 512);
console.log('result = ', powerSumDigTerm2(3), 2401);
console.log('result = ', powerSumDigTerm2(4), 4913);
console.log('result = ', powerSumDigTerm2(5), 5832);
console.log('result = ', powerSumDigTerm2(6), 17576);
console.log('result = ', powerSumDigTerm2(7), 19683);
console.log('result = ', powerSumDigTerm2(8), 234256);
console.log('result = ', powerSumDigTerm2(9), 390625);
console.log('result = ', powerSumDigTerm2(10), 614656);
console.log('result = ', powerSumDigTerm2(11), 1679616);
console.log('result = ', powerSumDigTerm2(12), 17210368);
console.log('result = ', powerSumDigTerm2(30), 248155780267521);

// https://www.codewars.com/kata/iq-test/train/javascript

/*
Bob is preparing to pass IQ test.
The most frequent task in this test is to find out which one of the given numbers
differs from the others. Bob observed that one number usually differs from the others in evenness.
Help Bob — to check his answers, he needs a program that among the given numbers
finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test,
which means indexes of the elements start from 1 (not 0)

Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

function iqTest(numbers){
  var arr = numbers.split(' ');
  var even = arr.filter(v => v%2 == 0);
  var odd = arr.filter(v => v%2 !== 0);

  var num = even.length == 1 ? even[0] : odd[0];
  return arr.indexOf(num) + 1;
};

console.log(iqTest("2 4 7 8 10"),3);
console.log(iqTest("1 2 2"), 1);

// best practice
function iqTest2(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});

  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
};

function iqTest3(numbers){
  var m = numbers.match(/[02468]\b.*[02468]\b/.test(numbers) ? /\d*[13579]\b/ : /\d*[02468]\b/)[0];
  return numbers.split(' ').indexOf(m) + 1;
};

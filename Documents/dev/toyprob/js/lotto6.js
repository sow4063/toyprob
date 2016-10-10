// https://www.codewars.com/kata/lotto-6-aus-49-6-of-49/train/javascript

/*
In Germany we have "LOTTO 6 aus 49". That means that 6 of 49 numbers are drawn as winning combination.
There is also a "Superzahl", an additional number, which can increase your winning category.

In this kata you have to write two methods.

function numberGenerator()

function checkForWinningCategory(checkCombination, winningCombination)

The first method is for drawing the lottery numbers.
You have to create an array with 7 random numbers. 6 from these are from 1 - 49.
Of Course every number may only occure once.
And the 7th number is the "Superzahl". A number from 0 - 9. This number is independent from the first six numbers.
The first 6 numbers have to be in ascending order.

A result could be:
4, 9, 17, 22, 25, 35, 0
Or:
4, 18, 22, 34, 41, 44, 4

The second method should check a given number against the winning combination and
have to return the winning category:

1  - 6 numbers and Superzahl match
2  - 6 numbers match
3  - 5 numbers and Superzahl match
4  - 5 numbers match
5  - 4 numbers and Superzahl match
6  - 4 numbers match
7  - 3 numbers and Superzahl match
8  - 3 numbers match
9  - 2 numbers and Superzahl match
-1 - if the numbers do not match any of the rules above

*/


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function numberGenerator() {
  var arr = [];
  for( var i = 0; i < 6; i++ ) {
    arr.push(getRandomInt(1,49));
  }

  arr.push(getRandomInt(0,9));

  return arr;
};

Array.prototype.same = function(a) {
    return this.filter(function(i) {return a.indexOf(i) >= 0;});
};

function checkForWinningCategory(checkCombination, winningCombination) {
  var same = winningCombination.slice(0,6).same(checkCombination.slice(0,6));
  var length = same.length;

  if(checkCombination[6] == winningCombination[6]) { // 1,3,5,7,9
    if(length == 6)
      res = 1;
    else if(length == 5)
      res = 3;
    else if(length == 4)
      res = 5;
    else if(length == 3)
      res = 7;
    else if(length == 2)
      res = 9;
  }
  else { // 2,4,6,8,
    if(length == 6)
      res = 2;
    else if(length == 5)
      res = 4;
    else if(length == 4)
      res = 6;
    else if(length == 3)
      res = 8;
    else
      res = -1;
  }

  return res;

};

var winningNumbers = numberGenerator();

console.log(winningNumbers, undefined, "The method must return an array.");
console.log(Array.isArray(winningNumbers), "The method must return an array.");
console.log(winningNumbers.length, 7, "The method must return an array of 7 numbers.");
console.log(winningNumbers[6] >= 0 && winningNumbers[6] <= 9, true, "The Superzahl must be between 0 and 9.");
console.log(numberGenerator(), winningNumbers, "The numbers have to be random!");

console.log(winningNumbers.slice(0,6).filter((a,b,c) => c.indexOf(a) === b).length, 6, "No doublettes allowed in the first 6 numbers.");
console.log(winningNumbers.slice(0,6), winningNumbers.slice(0,6).sort((a,b) => a - b), "The first 6 numbers have to be in ascending order.");

for(var i = 0; i < 6; i++) {
  console.log(winningNumbers[i] >= 1 && winningNumbers[i] <= 49, "The numbers must be between 1 and 49.");
}

console.log(checkForWinningCategory([ 1, 2, 3, 4, 5, 6, 7 ], [ 1, 2, 3, 4, 5, 6, 7 ]), 1);
console.log(checkForWinningCategory([ 1, 2, 3, 4, 5, 6, 0 ], [ 1, 2, 3, 4, 5, 6, 7 ]), 2);
console.log(checkForWinningCategory([ 1, 2, 3, 34, 35, 39, 1 ], [ 1, 2, 3, 4, 5, 6, 7 ]), 8);

// best practice
function numberGenerator() {
  var numbers = new Array();
  var supernumbers = new Array();

  for (i = 0; i < 49; i++) {
    numbers[i] = i+1;
  }

  for (i = 0; i < 10; i++) {
    supernumbers[i] = i;
  }

  return numbers.sort((a,b) => Math.floor((Math.random() * 3) - 1)).slice(0,6).sort((a,b) => a - b).concat(supernumbers.sort((a,b) => Math.floor((Math.random() * 3) - 1)).slice(0,1));
};

function checkForWinningCategory(checkCombination, winningCombination) {
  var szIsCorrect = checkCombination[6] == winningCombination[6];
  var checkCombination6 = checkCombination.slice(0, 6);
  var count = 0;
  for(var i = 0; i < winningCombination.length - 1; i++)
  {
    if(checkCombination6.includes(winningCombination[i]))
    {
      count++;
    }
  }
  if(count == 6)
  {
    return szIsCorrect ? 1 : 2;
  }
  if(count == 5)
  {
    return szIsCorrect ? 3 : 4;
  }
  if(count == 4)
  {
    return szIsCorrect ? 5 : 6;
  }
  if(count == 3)
  {
    return szIsCorrect ? 7 : 8;
  }
  if(count == 2 && szIsCorrect)
  {
    return 9;
  }

  return -1;
};

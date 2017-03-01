// https://www.codewars.com/kata/534ffb35edb1241eda0015fe

/*
Description:

Write a function called scoreHand that determines the score of a hand in the card game Blackjack (aka 21).
This function takes one parameter which is an array of strings that represent each card in the hand.
Each card will be one of the following strings: "2",..,"10", "J", "Q", "K", "A"

It returns a number which is the score of the hand.
Return the highest score of the cards that is less than or equal to 21.
If there is no score less than or euqal to 21 return the smallest score more than 21.

Scoring rules: In Blackjack number cards count as their face value (2 through 10).
Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Examples:

scoreHand(["A"]); //=> 11
scoreHand(["A", "J"]); //=> 21
scoreHand(["A", "10", "A"]); //=> 12
scoreHand(["5", "3", "7"]); //=> 15
scoreHand(["5", "4", "3", "2", "A", "K"]); //=> 25
*/

function scoreHand(cards){
  var obj = {2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, J:10, Q:10, K:10, A:11};

  var numbers = [];
  cards.forEach(function(val, i, arr) {
    if( val !== 'A' )
      numbers.push(obj[val]);
    else {
      if( arr.length !== 1 && ['J','Q','K'].indexOf(arr[i+1]) === -1 )
        numbers.push(1);
      else {
        numbers.push(11);
      }
    }

  });

  // numbers.sort(function(a,b){
  //   return a > b;
  // });

  var sum = numbers.reduce(function(a,b){
    return a + b;
  });

  console.log(sum);

  if( sum <= 21 )
    return sum;

  sum = 0;
  i = 0;
  while( sum <= 21 ) {
    sum += numbers[i++];
  }

  console.log(sum);

  return sum;
};

module.exports = scoreHand;

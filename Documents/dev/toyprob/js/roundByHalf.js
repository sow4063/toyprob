// https://www.codewars.com/kata/round-by-0-dot-5-steps/train/javascript

/*
Round any given number to the closest 0.5 step

I.E.

solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5
Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5
*/

function solution(n){
  var floor = n - parseInt(n);
  var ceil = Math.ceil(n) - n;
  var half = Math.abs(parseInt(n) + 0.5 - n);

  var min = Math.min(floor, ceil, half);
  return min === floor ? parseInt(n) : min === ceil ? Math.ceil(n) : Math.floor(n) + 0.5;
};

module.exports = solution;

// best practice
function solution(n){
  return Math.round(n*2)/2;
}

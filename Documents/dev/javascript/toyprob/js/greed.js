// https://www.codewars.com/kata/greed-is-good/train/javascript

/*
Greed is a dice game played with five six-sided dice.
Your mission, should you choose to accept it, is to score a throw according to these rules.
You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example,
a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points,
but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450
*/

function score( dice ) {
  var obj = {};
  dice.forEach(function(v){
    obj[v] ? obj[v]++ : obj[v] = 1;
  });

  var sum = 0;
  for( key in obj ) {
    var quot = parseInt( obj[key] / 3 );
    var mod = obj[key] % 3;

    if( key === '1' ) {
      sum += quot * 1000 + mod * 100;
    }
    else if( key === '2' ) {
      sum += quot * 200;
    }
    else if( key === '3' ) {
      sum += quot * 300;
    }
    else if( key === '4' ) {
      sum += quot * 400;
    }
    else if( key === '5' ) {
      sum += quot * 500 + mod * 50;
    }
    else if( key === '6' ) {
      sum += quot * 600;
    }
  }

  return sum;
};

module.exports = score;

// best practice
function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}

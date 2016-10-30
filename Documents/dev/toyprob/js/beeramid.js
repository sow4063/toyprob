// https://www.codewars.com/kata/beeramid

/*
Description:

Let's pretend your company just hired your friend from college and
paid you a referral bonus. Awesome!
 To celebrate, you're taking your team out to the terrible dive bar next door and
 using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can.
 And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level -
1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of
a beer can pyramid you can make, given the parameters of:

1) your referral bonus, and

2) the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
*/

// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {

  if( bonus < price )
    return 0;

  var n = Math.floor(bonus / price);

  var i = 0;
  var sum = 0;
  while( n > sum ) {
    sum += Math.pow(++i,2);
  }

  return n === sum ? i : i - 1;

};

module.exports = beeramid;

// best practice
var beeramid = function(bonus, price) {
  var beers = Math.floor(bonus / price), levels = 0;
  while(beers >= ++levels * levels) {
    beers -= levels * levels;
  }
  return levels - 1;
}

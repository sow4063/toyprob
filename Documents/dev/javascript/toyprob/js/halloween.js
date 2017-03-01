// https://www.codewars.com/kata/halloween-trick-or-treat

/*
When no more interesting kata can be resolved, I just choose to create the new kata,
to solve their own, to enjoy the process --myjinxin2015 said

Description:

Halloween is coming, and many children are in front of your house.
They are shouting: "trick or treat!" So you need to give them some candy, let them leave.

Arguments:

children: numbers of children, more than or equals to 2
candies: like this:
[["candy","apple","candy"],["candy","candy"],["candy","candy"]]
Results:

If the children get what they want, return "Thank you, strange uncle!"
If not, return "Trick or treat!"
How to let the children satisfied?

1 - Each child has at least two candies;
2 - Each child gets the same amount of candy.
3 - No children get the "bomb" ;-)

Some Examples

trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy"]])
should return: "Thank you, strange uncle!"(Don't mind apple)

trickOrTreat(3,[["candy","apple"],["apple","candy"],["candy","apple"]])
should return: "Trick or treat!"(Each child has only got 1 candy)

trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy","candy"]])
should return: "Trick or treat!"(The amount of candy are diffrent)

trickOrTreat(3,[["candy","apple","candy"],["candy","candy"]])
should return: "Trick or treat!"(One child has no candy)

trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","bomb","candy"]])
should return: "Trick or treat!"(Some child got a bomb)
You can assume that the arguments are valid arrays (like the examples above, no empty array).
*/

function trickOrTreat(children, candies) {

  if( candies.length < children )
    return "Trick or treat!";

  var box = [];
  candies.forEach(function(arr) {
    return arr.forEach(function(val) {
      box.push(val);
    } );
  } );

  var bomb = box.indexOf('bomb');

  if( bomb !== -1 )
    return "Trick or treat!";

  var nums = box.filter( function(val) {
    return val === 'candy';
  } );

  return ( nums.length % children === 0 && nums.length / children >= 2 ) ? "Thank you, strange uncle!" : "Trick or treat!";

};


module.exports = trickOrTreat;

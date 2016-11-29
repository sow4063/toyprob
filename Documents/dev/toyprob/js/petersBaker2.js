// https://www.codewars.com/kata/pete-the-baker-part-2/train/javascript

/*
Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake. He also might have added some of the ingredients already, but something is missing. Can you help him to find out, what he has to add to the mixture?

Requirements:

Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that.
That means: if he already added the amount of flour for 2.8 cakes,
he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything,
just return an empty hash then.
If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.

For simplicity we ignore all units and just concentrate on the numbers.
E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.

Examples:

var recipe = {flour: 200, eggs: 1, sugar: 100};

getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}
getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}
*/

function getMissingIngredients(recipe, added) {
  var obj = {};

  var keys = Object.keys(added);
  var max = 0;
  for( var key in added ) {
    max = Math.max( max, Math.ceil( added[key] / recipe[key] ) );
  }

  if( !max )
    return recipe;

  for( var key in recipe ) {
    if( added.hasOwnProperty(key) ) {
      var val = recipe[key] * max - added[key];
      if(val) obj[key] = val;
    }
    else {
      obj[key] = recipe[key] * max;
    }

  }

  return obj;
};

module.exports = getMissingIngredients;

// best practice
function getMissingIngredients(recipe, added) {
  needed = {};

  numCakes = 1; // number of cakes

  for (ing in recipe) {
    if (ing in added) {
      cakes = Math.ceil(added[ing] / recipe[ing]);
      numCakes = cakes > numCakes ? cakes : numCakes;
    }
  }

  for (ing in recipe) {
    if (!(ing in added)) needed[ing] = recipe[ing] * numCakes;
    if (recipe[ing] * numCakes - added[ing])
      needed[ing] = recipe[ing] * numCakes - added[ing];
  }

  return needed;
}

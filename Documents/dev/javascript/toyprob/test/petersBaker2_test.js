var assert = require('chai').assert;
var getMissingIngredients = require('../js/petersBaker2.js');

describe('Peters Baker 2', function() {
  // some helpers to make hashes comparable
  var sortHash = function(hash) {
    return Object.keys(hash).sort().reduce(function(p, c) { p[c] = hash[c]; return p; }, {});
  };

  var assertSimilarHash = function(expected, actual, message) {
    assert.deepEqual(sortHash(expected), sortHash(actual), message );
  };

  it('should pass examples from description', function() {
    var recipe = {flour: 200, eggs: 1, sugar: 100};
    assertSimilarHash(getMissingIngredients(recipe, {flour: 50, eggs: 1}), {flour: 150, sugar: 100}, 'example #1 failed');
  });

  it('should pass examples from description', function() {
    var recipe = {flour: 200, eggs: 1, sugar: 100};
    assertSimilarHash(getMissingIngredients(recipe, {}), {flour: 200, eggs: 1, sugar: 100}, 'example #2 failed');
  });

  it('should pass examples from description', function() {
    var recipe = {flour: 200, eggs: 1, sugar: 100};
    assertSimilarHash(getMissingIngredients(recipe, {flour: 500, sugar: 200}), {flour: 100, eggs: 3, sugar: 100}, 'example #2 failed');
  });
});

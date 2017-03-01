var assert = require('chai').assert;
var solution = require('../js/breakCamelCase.js');

describe('Break CamelCase', function() {
  it('Basic Tests', function() {
    assert.equal( solution('camelCasing'), 'camel Casing');
  });

  it('Basic Tests', function() {
    assert.equal( solution('camelCasingTest'), 'camel Casing Test');
  });
});

var chai = require('chai');
var assert = chai.assert;
var toCamelCase = require('../js/convertStringToCamelCase.js');

describe('Test for Convert String ToCamelCase', function() {
  it('should equal', function() {
    assert.equal( toCamelCase("the-stealth-warrior") , 'theStealthWarrior');
  });

  it('should equal', function() {
    assert.equal( toCamelCase("The_Stealth_Warrior") , 'TheStealthWarrior');
  });

});

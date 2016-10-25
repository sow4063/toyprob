var chai = require('chai');
var assert = chai.assert;
var Warrior = require('../js/ninja_samurai.js');

describe("First attack", function() {
  ninja = new Warrior('Hanzo Hattori');
  samurai = new Warrior('Ryōma Sakamoto');

  samurai.block = 'l';
  ninja.attack(samurai, 'h');

  it("Expected samurai health to equal 90", function() {
    assert.equal( samurai.health, 90 );
  });

});

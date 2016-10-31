var chai = require('chai');
var assert = chai.assert;
var trickOrTreat = require('../js/halloween.js');

describe('Test for halloween', function(){

  it('should equal', function() {
    assert.equal( trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy"]]), "Thank you, strange uncle!" );
  });

  it('should equal', function() {
    assert.equal( trickOrTreat(3,[["candy","apple"],["apple","candy"],["candy","apple"]]), "Trick or treat!" );
  });

  it('should equal', function() {
    assert.equal( trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy","candy"]]), "Trick or treat!" );
  });

  it('should equal', function() {
    assert.equal( trickOrTreat(3,[["candy","apple","candy"],["candy","candy"]]), "Trick or treat!" );
  });

  it('should equal', function() {
    assert.equal( trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","bomb","candy"]]), "Trick or treat!" );
  });

  children = 4;
  candies = [["candy","candy","candy","candy","candy","candy","candy","candy","candy","candy"],["beer","candy","candy","candy","candy","candy","candy","candy","candy","candy","candy","apple","baby"]]

  it('should equal', function() {
    assert.equal( trickOrTreat(children, candies), "Trick or treat!" );
  });

  children = 12;
  candies = [ ["beer","stone","candy","beer","candy","candy","stone","phone","apple"],
              ["cat","money","beer","candy","baby","beer","baby","candy","beer","dog","paper","cat","dog","candy","cat"],
              ["money","beer","cat","candy","candy","candy","dog","dog"],
              ["baby","phone","candy","candy","cat","paper","dog","cat","phone","candy"],
              ["paper","cat","cat","stone","money","dog","baby","dog","paper","phone","candy","phone","candy","candy","cat"],
              ["candy","dog","dog","house","candy","candy","myjinxin","keys"],
              ["cat","dog","phone","cat","keys","myjinxin","cat","candy","candy","house","candy","baby","stone","keys","cat"],
              ["stone","phone","candy","cat","candy","dog","candy","keys","beer","beer","phone"]
            ];

  it('should equal', function() {
    assert.equal( trickOrTreat(children, candies), "Trick or treat!" );
  });

  children = 6;
  candies = [ ["candy","candy","beer","keys","apple","candy","candy"],
              ["candy","apple","stone","keys","house","keys","dog","candy","candy","dog","candy","house","paper","baby","cat"],
              ["candy","candy","candy","candy"]
            ];

  it('should equal', function() {
    assert.equal( trickOrTreat(children, candies), "Trick or treat!" );
  });

});

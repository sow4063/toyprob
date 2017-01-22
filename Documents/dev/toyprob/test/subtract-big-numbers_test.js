var assert = require('chai').assert;
var subtract = require('../js/subtract-big-numbers.js');

describe('Some simple subtraction', function() {
  it('simple', function() {
    assert.equal(subtract("2", "3"), "-1");
    assert.equal(subtract("30", "69"), "-39");
    //assert.equal(subtract("6", "2"), "4");
    //assert.equal(subtract("85", "11"), "74");
  });
});

// describe('Some corner case', function() {
//   it('corner cases', function() {
//     assert.equal(subtract("2" ,"0"), "2");
//     assert.equal(subtract("0", "30"), "-30");
//     assert.equal(subtract("0000001", "3"), "-2");
//     assert.equal(subtract("1009", "03"), "1006");
//     assert.equal(subtract("234", "242"), "-8");
//     assert.equal(subtract("294", "334"), "-40");
//   });
// });

// describe('Some big subtraction', function() {
//   it('big boys', function() {
//     assert.equal(subtract("98765", "56894"), "41871");
//     assert.equal(subtract("1020303004875647366210", "2774537626200857473632627613"), "-2774536605897852597985261403");
//     assert.equal(subtract("58608473622772837728372827", "7586374672263726736374"), "58600887248100574001636453");
//     assert.equal(subtract("9007199254740991", "9007199254740991"), "0");
//   });
//});
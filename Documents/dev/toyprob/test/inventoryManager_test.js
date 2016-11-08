var chai = require('chai');
var assert = chai.assert;
var update_quality = require('../js/inventoryManager.js');

function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

describe("Basic tests", function() {

  // Testing one day lapse
  update_quality();

  it("Testing "+items[0].name, function() {
    assert.equal(items[0].sell_in,9,"Expected different value");
    assert.equal(items[0].quality,19,"Expected different value");
  });

  it("Testing "+items[1].name,function(){
    assert.equal(items[1].sell_in,1,"Expected different value");
    assert.equal(items[1].quality,1,"Expected different value");
  });

  it("Testing "+items[2].name,function(){
    assert.equal(items[2].sell_in,4,"Expected different value");
    assert.equal(items[2].quality,6,"Expected different value");
  });

  it("Testing "+items[3].name,function(){
    assert.equal(items[3].sell_in,0,"Expected different value");
    assert.equal(items[3].quality,80,"Expected different value");
  });

  it("Testing "+items[4].name,function(){
    assert.equal(items[4].sell_in,14,"Expected different value");
    assert.equal(items[4].quality,21,"Expected different value");
  });

  it("Testing "+items[5].name,function(){
    assert.equal(items[5].sell_in,2,"Expected different value");
    assert.equal(items[5].quality,4,"Expected different value");
  });

});

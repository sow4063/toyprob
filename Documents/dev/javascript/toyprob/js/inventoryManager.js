// https://www.codewars.com/kata/55d1d06def244b18c100007c

/*
Description:

Hi and welcome to team Gilded Rose.

You are asked to fix the code for our store management system.
All items have a sell_in value which denotes the number of days we have left to sell the item
and a quality value which denotes how valuable the item is. (For Java specifics see Java Notes below)

At the end of each day our software should lower both values for every item.

Pretty simple, right? Well this is just the general rule with some exception:

once the sell_in days is less then zero, quality degrades twice as fast;
the quality of an item can never be negative or increase beyond 50;
the "Aged Brie" goods actually increases in quality each passing day;
"Sulfuras" goods, being legendary items, never change their sell_in or quality values;
"backstage passes", like aged brie, increases in quality as it's sell_in value decreases;
not just that: for "backstage passes" quality increases by 2 when there are 10 days or less
and by 3 when there are 5 days or less but quality drops to 0 after the concert (sell_in 0 or lower).

Complicated enough, now? Well, there is a new item category that
we would like to see added to the inventory management system:

"Conjured" items degrade in quality twice as fast as normal items.

You can change the update_quality method, add any new code, but you should NOT edit the item constructor/class:
it belong to the goblin in the corner who will insta-rage and
one-shot you as he doesn't believe in shared code ownership.

Just for extra clarification, an item can never have its quality increase above 50,
however "Sulfuras" is a legendary item and as such its quality is 80 and it never alters.

You won't find mixed categories (like a "Conjured Sulfuras Backstage pass of Doom"),
but the category name may be not in the first position
(ie: expect something like "SuperUberSword, Conjured" or "Mighty Sulfuras Armour of Ultimate Awesomeness").

Java Notes

sell_in value can be accessed using getSellIn() and setSellIn() methods
quality value can be accessed using getQuality() and setQuality() methods

Personal note: I was recently asked during an interview to solve a relatively simple,
yet interesting problem, original taken from here.

As I was apparently scouted thanks to CodeWars, I think the bare minimum I could do to give back to the community was
to turn this idea into a bug-fixes kata, with some small twists added to the original they showed me :)
*/

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

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
};

module.exports = Item;
module.exports = items;
module.exports = update_quality;

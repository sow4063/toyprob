// https://www.codewars.com/kata/dont-make-me-repeat-myself/train/javascript

/*
You're working on some interesting console application and you want to line up some of your lines just right.
 A lot of your data is nested down so you've got code like this all over:

console.log('Root ->');
console.log('    Sub-node');
console.log('    Sub-node->');
console.log('        Sub-sub-node');
...
but that just looks terrible and doesn't scale well for variable levels of nesting.
Oh, if only you could write something more like:

console.log('Root->');
console.log(' '.repeat(4) + 'Sub-node');
console.log(' '.repeat(4) + 'Sub-node->');
console.log(' '.repeat(8) + 'Sub-sub-node');
...
Oh, that's right. You can.

for loops are cool, I guess. Other kinds of solutions are a lot cooler.
*/

String.prototype.repeat = function(count) {
  var str = '';
  for( var i = 0; i < count; i++ ) {
    str += this.valueOf();
  }

  return str;
};

module.exports = String.prototype.repeat;

// best practice
String.prototype.repeat = function(count) {
  return new Array(count + 1).join(this);
};

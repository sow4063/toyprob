// https://www.codewars.com/kata/partition-on/train/javascript

/*
Write a function which partitions a list of items based on a given predicate.

After the partition function is run, the list should be of the form [ F, F, F, T, T, T ]
where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts)
should be preserved relative to each other.

For convenience and utility, the partition function should return the boundary index.
In other words: the index of the first T value in items.

For example:

var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, items);
// items should now be [1, 3, 5, 2, 4, 6]
// i     should now be 3
*/

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
var reject = function(array, func) {
  return array.filter(function(v) {
      return !func(v);
  });
};

function partitionOn(pred, items) {
  var fs = reject( items, pred);
  var ts = items.filter(pred);
  var idx = fs.length;

  for( var i = 0; i < fs.length; i++ ) {
    items[i] = fs[i];
  }

  for( var i = idx, j = 0; j < ts.length; i++, j++ ) {
    items[i] = ts[j];
  }

  return idx;
};

module.exports = partitionOn;

// best practice
function partitionOn(pred, items) {
  var f = items.filter( function(e) { return !pred(e); } );
  var t = items.filter(pred);
  items.length = 0;
  for(var i = 0; i < f.length; i++) { items.push(f[i]); }
  for(var i = 0; i < t.length; i++) { items.push(t[i]); }

  return f.length;

}

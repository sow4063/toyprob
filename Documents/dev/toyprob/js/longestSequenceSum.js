// https://www.codewars.com/kata/longest-sequence-with-zero-sum/train/javascript

/*
Write a method which takes an array of integers (positive and negative) and
returns the longest contiguous sequence in this array, which total sum of elements equal 0.

For example:
maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])

Should return [92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.
*/

var maxZeroSequence = function(arr) {
  var n = arr.length;
  var result = [];

  for( var i = 0; i < n; i++ ) {
    for( var j = i; j < n; j++ ) {
      var sum = arr.slice(i, j+1).reduce(function(t,v){return t+v;},0);

      if( sum === 0 ) {
        result.push( arr.slice(i, j + 1) );
      }
    }
  }

  return result.sort( function(a,b){ return b.length - a.length;} )[0];
};

module.exports = maxZeroSequence;

// best practice
var maxZeroSequence = function(arr) {
  for (var l = arr.length; l > 0; l--) {
    for (var s = 0; s <= arr.length - l; s++) {
      for (var sum = 0, i = s; i < s+l; i++) sum += arr[i];
      if (sum == 0) return arr.slice(s, s+l);
    }
  }
  return [];
}

// https://www.codewars.com/kata/542ebbdb494db239f8000046

/*
Description:

Given a sequence of items and a specific item in that sequence,
return the item immediately following the item specified.
If the item occurs more than once in a sequence, return the item after the first occurence.
This should work for a sequence of any type.

When the item isn't present or nothing follows it,
the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
*/

function nextItem(xs, item) {
  if( Array.isArray(xs) || typeof xs === 'string'  ) {
    var idx = xs.indexOf(item);
    idx = idx === -1 ? xs.length : idx + 1;
    return xs[idx] || undefined;
  }
  else {
    for( var i = 0; i < item; i++ ) {
      if( xs.next().value === item )
        break;
    }
    return xs.next().value  || undefined;
  }

};

module.exports = nextItem;

// best practice
function nextItem(xs, item) {
  var found = false;
  for (var x of xs) {
    if (found) return x;
    if (x == item) found = true;
  }
  return undefined;
}

// https://www.codewars.com/kata/closures-and-scopes/train/javascript

/*
We want to create a function, which returns an array of functions,
which return their index in the array.

For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3

We already implemented that function, but when we actually run the code,
the result doesn't look like what we expected.
Can you spot, what's wrong with it? A test fixture is also available

*/

function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    let j = i;
    callbacks[i] = (function() {
      return j;
    });
  }

  return callbacks;
};

var callbacks = createFunctions(5);

for( var i = 0; i < callbacks.length; i++ ) {
  console.log( callbacks[i](), i, 'Function with index ' + i );
}

// best practice
function createFunctions2(n) {
  var callbacks = [];

  var factory = function(x){
    return function(){
      return x;
    };
  };

  for (var i=0; i<n; i++) {
    callbacks.push(factory(i));
  }

  return callbacks;
};

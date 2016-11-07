// https://www.codewars.com/kata/js-is-weird-return-a/train/javascript

/*
There are only two tests. Make the function return 'a' as a string,
and don't use any banned characters.

You can only use the following characters:

+ ( ) [ ] ! x =

x= is the initial solution and should be used only to define x.
 x is preloaded as a variable.

All other characters (including spaces) are banned.
*/
function a() {
  var x=(![]+[]+[])[+!![]];
  return x;
}

module.exports = a;

// best practice
x=(![]+[])[+!![]]

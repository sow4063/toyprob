// https://www.codewars.com/kata/sort-arrays-ignoring-case/train/javascript

/*
Simple sort, but this time sort regardless of upper / lower case.

So the input of

[ "Hello", "there", "I'm", "fine"]
is translated to

["fine", "Hello", "I'm", "there" ]
*/
function sortme(arr) {
  return arr.sort(function(a,b){return a.toLowerCase() > b.toLowerCase()});
};

// best practice
// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
  return names.sort(function(first, second) {
    return first.toLowerCase().localeCompare(second.toLowerCase())
  })
}

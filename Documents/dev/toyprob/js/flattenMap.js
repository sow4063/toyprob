// https://www.codewars.com/kata/flatten-a-nested-map/train/javascript

/*
Write a function that takes a hierarchical map of properties and converts it to a single, flattened map, 
with the different levels separated by a forward slash ('/').

For example, given an input such as this:

{
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
}
return a new map:

{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
}
The passed in argument will always be an object, but it may be empty. 
Make sure to correctly test for Arrays and nulls — they should be left as is in the result. 
The only property types will be:

true
false
Numbers
Strings
null
Arrays
Functions
Nested Maps
Keys can be any string of characters, excluding the '/' character.
*/


// Flattens an hierarchical map into a single level
function flattenMap(map) {
  
  var obj = {};
  
  for( var key in map ) {
     if( !Array.isArray(map[key]) && typeof map[key] === 'object' && map[key] ) {
       var childObj = flattenMap(map[key]);
       for( var childKey in childObj ) {
         var newKey = key + '/' + childKey;
         var value = childObj[childKey] || null;
         obj[newKey] = value;
       }
     }
     else {
       obj[key] = map[key] || null;
     }
  }
  
  return obj;
  
};

module.exports = flattenMap;

// best practice
function flattenMap(map) {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur || Array.isArray(cur)) {
            return result[prop] = cur;
        }
        for (var p in cur) {
            recurse(cur[p], prop ? prop+"/"+p : p);
        }
    }
    recurse(map, "");
    return result;
}


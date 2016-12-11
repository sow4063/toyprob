// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  if( str1.length === 0 && str1[0] === str2[0] ) {
    return true;
  }
  else if( str1[0] !== str2[0] ) {
    return false;
  }

  return compareStr( str1.substr(1), str2.substr(1) );

};

// // 16. Write a function that accepts a string and creates an array where each letter
// // occupies an index of the array.
var createArray = function(str) {
  if( str.length === 0 )
    return [];

  return [str[0]].concat( createArray( str.substr(1) ) );
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if( array.length == 0 )
    return [];
  return reverseArr(array.slice(1) ).concat( array.slice(0,1) );
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if( length === 0 )
    return [];

  return [value].concat( buildList(value, length - 1) );
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  if( array.length === 0 )
    return count;

  if( array[0] === value )
    count++;

  return count + countOccurrence( array.slice(1), value );
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if( array.length === 1 )
    return [ callback( array[0] ) ];

  return [ callback( array[0] ) ].concat( rMap( array.slice(1), callback ) );
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if( array.length === 1 )
    return [array[0].toUpperCase()];

  return [array[0].toUpperCase()].concat( capitalizeWords( array.slice(1) ) );
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  var arr = [ array[0].substr(0,1).toUpperCase() + array[0].substr(1) ];
  if( array.length === 1 ) {
    return arr;
  }

  return arr.concat( capitalizeFirst( array.slice(1) ) );
};

// // 28. Return the sum of all even numbers in an object containing nested objects.
// // var obj1 = {
// //   a: 2,
// //   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
// //   c: {c: {c: 2}, cc: 'ball', ccc: 5},
// //   d: 1,
// //   e: {e: {e: 2}, ee: 'car'}
// // };
// // nestedEvenSum(obj1); // 10
// var nestedEvenSum = function(obj) {
// };

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  return arrays.reduce(function(a,b){
    return a.concat( Array.isArray(b) ? flatten(b) : b );
  },[]);
};

// // 30. Given a string, return an object containing tallies of each letter.
// // letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
// var letterTally = function(str, obj) {
// };

// // 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// // elements they should be replaced with a single copy of the element. The order of the
// // elements should not be changed.
// // Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// // Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
// var compress = function(list) {
// };

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {

  if( array.length === 0 ) {
    return [];
  }
  array[0].push(aug);
  return [array[0]].concat( augmentElements( array.slice(1), aug ) );

};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {

};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {

  var obj = {
              '1': 'one',
              '2': 'two',
              '3': 'three',
              '4': 'four',
              '5': 'five',
              '6': 'six',
              '7': 'seven',
              '8': 'eight',
              '9': 'nine'
            };

  var arr = str.split(' ');
  arr[0] = obj[arr[0]] ? obj[arr[0]] : arr[0];

  if( arr.length === 1 ) {
    return arr[0];
  }

  return [arr[0]].concat( numToText( arr.slice(1).join(' ') ) ).join(' ');
};


// // *** EXTRA CREDIT ***

// // 36. Return the number of times a tag occurs in the DOM.
// var tagCount = function(tag, node) {
// };

// // 37. Write a function for binary search.
// // Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// // console.log(binarySearch(5)) will return '5'
// // https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

// var binarySearch = function(array, target, min, max) {
// };

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

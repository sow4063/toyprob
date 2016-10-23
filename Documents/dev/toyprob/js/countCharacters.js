// https://www.codewars.com/kata/count-characters-in-your-string/train/javascript

/*
The main idea is to count all the occuring characters(UTF-8) in string.
If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }
*/

function count (string) {
  var obj = {};
  var arr = string.split('');

  for( var i = 0; i < arr.length; i++ ) {
    obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
  }

  return obj;
};

module.exports = count;

// best practice
function count (string) {
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

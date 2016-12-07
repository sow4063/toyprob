// https://www.codewars.com/kata/consecutive-strings/train/javascript
/*
You are given an array strarr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

function compare(a,b) {
  return b.length - a.length;
};

function longestConsec(strarr, k) {
  if( strarr.length == 0 || k > strarr.length || k <= 0 )
    return "";

  var arr = [];
  for( var i = 0; i < strarr.length; i++ ) {
    arr.push(strarr.slice(i, i+k).join(''));
  }

  var idx = 0;
  var max = 0;
  for( var i = 0; i < arr.length; i++ ) {
    if( arr[i].length > max ) {
      idx = i;
      max = arr[i].length;
    }
  }
  return arr[idx];
};

module.exports = longestConsec;

// best practice
function longestConsec2(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
};

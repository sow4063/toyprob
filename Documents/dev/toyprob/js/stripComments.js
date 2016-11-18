// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

/*
Description:

Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers){
  var results = [];
  var arr = input.split('\n');

  for( var i = 0; i < arr.length; i++ ) {
    var idx = arr[i].indexOf(markers[0]);
    if( idx === -1 ) {
      idx = arr[i].indexOf(markers[1]);
      if( idx === -1 ) {
        results.push(arr[i]);
      }
      else
        results.push(arr[i].substr(0,idx).trim());
    }
    else {
      results.push(arr[i].substr(0,idx).trim());
    }
  }

  return results.join('\n');
};

module.exports = solution;

// best practice
function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}

// clever
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}

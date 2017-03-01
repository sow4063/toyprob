// https://www.codewars.com/kata/arbitrary-word-wrapping

/*
You are writing an app that displays a fixed width font and
has a strict limit of 25 characters per line in one particular text area.

Write a function that takes in a string, inserts newline characters, and
adds a hyphen on the end of a line if a word is continued on the next line.

White space should be left in the result string as is.

Test Fixture Cut-n-Paste:

var input = "The quick brown fox jumped over the lazy developer.";
var expectedResult ="The quick brown fox jump-\ned over the lazy develop-\ner.";
var result = wordWrap(input);
Test.expect(result === expectedResult);
*/

var wordWrap = function(str) {
  if( str.length < 25 )
    return str;

  if( str[25] === ' ' )
    return str.substr(0,25) + '\n' + wordWrap(str.substr(25));
  else
    return str.substr(0,24) + '-\n' + wordWrap(str.substr(24));
};

module.exports = wordWrap;

// best practice
var wordWrap = function (str) {
    var arr=[],r = /(^.{25}\s|^.{24}\s\w)/
    while(str.length>0){
      if(str.length>=25&&!r.test(str)){
        str = str.slice(0,24) +'-'+ str.slice(24)
      }
      arr.push(str.slice(0,25))
      str = str.slice(25)
    }
    return arr.join('\n')

};

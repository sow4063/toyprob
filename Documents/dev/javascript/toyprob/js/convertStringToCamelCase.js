// https://www.codewars.com/kata/convert-string-to-camel-case

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
*/

function toCamelCase(str) {

  return str.replace(/[\-_ ]./g, function(word) {
                return word.charAt(1).toUpperCase();
             } );
};

module.exports = toCamelCase;

// best practice
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

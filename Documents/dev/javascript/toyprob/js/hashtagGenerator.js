// https://www.codewars.com/kata/52449b062fb80683ec000024

/*
Description:

The marketing team are spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

If the final result is longer than 140 chars it must return false.
If the input is a empty string it must return false.
It must start with a hashtag (#).
All words must have their first letter capitalized.
Example Input to Output:

" Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

" Hello World " => "#HelloWorld"
*/

function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function generateHashtag (str) {

  if( !str.length ) return false;

  var result = '#';
  result += str.split(' ').map(function(v){
    return titleCase(v);
  }).join('');

  if( result.length > 140 ) return false;

  return result;
};

module.exports = generateHashtag;

// best practice
function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

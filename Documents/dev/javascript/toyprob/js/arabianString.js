// https://www.codewars.com/kata/arabian-string/train/javascript

/*
You must create a method that can convert a string from any format into CamelCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

Tests

camelize("example name")   # => ExampleName
camelize("your-NaMe-here") # => YourNameHere
camelize("testing ABC")    # => TestingAbc
*/

function camelize(str){
  var regExp = /[\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  str = str.replace(regExp, '#');

  return str.split('#').map(function(v){
    return v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();
  }).join('');
};

module.exports = camelize;

// best practice
function camelize(str) {
  return str.match(/[a-z0-9]+/gi).map(function(s) {
    return s[0].toUpperCase() + s.substr(1).toLowerCase()
  }).join('')
}

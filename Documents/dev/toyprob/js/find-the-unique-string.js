// https://www.codewars.com/kata/find-the-unique-string/train/javascript

/*
Caution: This kata does not currently have any known supported versions for JavaScript. It may not be completable due to dependencies on out-dated libraries/language versions.
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. It’s guaranteed that array contains more than 3 strings.
*/


function findUniq(arr) {
  var temp = arr.slice();
  
  var index = 0;
  
  for( var i = 2; i < temp.length; i++ ) {
    var str1 = temp[i-2].toLowerCase().split('').sort().filter( (v, i, a) => a.indexOf(v) === i ).join(''); 
    var str2 = temp[i-1].toLowerCase().split('').sort().filter( (v, i, a) => a.indexOf(v) === i ).join(''); 
    var str3 = temp[i].toLowerCase().split('').sort().filter( (v, i, a) => a.indexOf(v) === i ).join(''); 
    
    if( i < temp.length - 2 ) {
      if( str1.trim() !== str2.trim() ) {
        if( str1.trim() === str3.trim() )
          index = i - 1;
        else
          index = i - 2;
          
        break;
      }
    }
    else {
      if( str1.trim() !== str2.trim() ) {
        if( str1.trim() === str3.trim() )
          index = i - 1;
        else
          index = i - 2;
      }
      else
        index = i;
        
      break;
    }
    
    
  }
  
  return temp[index];
};

module.exports = findUniq;

// best practice
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3)
  
  if (!similar(a,b) && !similar(a,c)) return a
  for (d of arr) if (!similar(a,d)) return d
}

function similar (x, y) {
  x = new Set(x.toLowerCase())
  y = new Set(y.toLowerCase())

  if (x.size !== y.size) return false
  for (z of x) if (!y.has(z)) return false

  return true
}

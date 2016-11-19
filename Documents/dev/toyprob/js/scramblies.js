// https://www.codewars.com/kata/scramblies/train/javascript

/*
Write function scramble(str1,str2) that returns true if a portion of str1 characters can be
rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
*/

/*
function filterMatch(itemStr, keyword){
    var words = keyword.split(' '), i = 0, w, reg;
    for(; w = words[i++] ;){
        reg = new RegExp(w, 'ig');
        if (reg.test(itemStr) === false) return false;   // word not found
        itemStr = itemStr.replace(reg, '');              // remove matched word from original string
    }
    return true;
}
*/

function scramble(str1, str2) {
 var arr1 = str1.split('').sort();
 var arr2 = str2.split('').sort();

 for( var x = 0, i = 0; x <= arr1.length && i < arr2.length; x++ ) {
   if( arr1[x] === arr2[i] )
     i++;
 }

 return x <= arr1.length;
};

module.exports = scramble;

// best practice
function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}

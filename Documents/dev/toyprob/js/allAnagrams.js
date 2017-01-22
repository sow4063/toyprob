/**
 * 단일 string을 받아 string의 모든 가능한 anagram을 생성하고 배열로 출력하는 function을 작성하십시오.
 * 처음에는 반복되는 문자열에 대해 걱정하지 마세요. 
 * Extra credit: 반복되는 값을 uniq()을 사용하지 말고 없에세요.
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {

  var words = [];

  var makeWords = function( word, str){
  	if( str.length === 0 ) {
  		words.push(word);
  	}

  	for(var i = 0; i < str.length; i++) {
      makeWords( word + str.slice(i, i+1), str.slice(0, i) + str.slice(i+1) );   
  	}

  }

  makeWords('', string);

  return words;
};

module.exports = allAnagrams;


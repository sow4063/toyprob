/*

표준 전화 키패드의 각 숫자 키에는 라틴 문자가 쓰여 있습니다.
참고: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

기업은 광고에서 전화 번호를 철자로하여 더 기억에 남는 영리한 방법을 찾아 내기도합니다. 그러나 많은 조합이 있습니다!

최대 4 자리 숫자의 전화 번호를 사용하고 해당 번호로 전화에 쓸 수 있는 모든 단어 목록을 반환하는 함수를 작성하십시오. 
(영어 단어뿐만 아니라 모든 순열을 반환해야합니다.)

Example:
  telephoneWords('2745');
  => ['APGJ',
       'APGK',
       'APGL',
       ..., // many many more of these
       'CSIL']

Tips:

 Extra credit: 
 /usr/share/dict/words에 영어 사전 단어 목록이 있습니다.
 파일에 포함 된 단어 만 반환하도록 결과를 필터링해보세요.  hint: require('fs')
   
*/

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

var result = [];

function makeWords(row, col ){

}

var telephoneWords = function(digitString) {

  var arr = [];
  
  for( var i = 0; i < digitString.length; i++ ) {
    var val = digitString[i];
    arr.push( phoneDigitsToLetters[ val ] );
  }

  //console.log(arr);

  for( var j = 0; j < arr[0].length; j++ ) {
    makeWords();
  }

  return result;

};

module.exports = telephoneWords;


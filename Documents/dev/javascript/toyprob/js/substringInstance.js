// https://www.codewars.com/kata/return-substring-instance-count-2/train/javascript

/*
Complete the solution so that it returns the number of times the search_text is found within the full_text.

searchSubstr( fullText, searchText, allowOverlap = true )
so that overlapping solutions are (not) counted. If the searchText is empty, it should return "0". Usage examples:

searchSubstr('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
searchSubstr('aaabbbcccc', 'bbb') # should return 1
searchSubstr( 'aaa', 'aa' ) # should return 2
searchSubstr( 'aaa', '' ) # should return 0
searchSubstr( 'aaa', 'aa', false ) # should return 1
*/

function searchSubstr( fullText, searchText, allowOverlap = true ){

  if( searchText === '' || searchText === undefined )
    return 0;

  if( allowOverlap ) {
    var count = 0;
    var pos = fullText.indexOf( searchText );

    while( pos !== -1 ) {
      count++;
      pos = fullText.indexOf( searchText, pos + 1 );
    }
    return count;
  }
  else {
    return fullText.split( searchText ).length - 1;
  }
};

module.exports = searchSubstr;

// best practice
function searchSubstr(fullText, searchText, allowOverlap) {
  if(searchText == '') return 0;
  var re = new RegExp(searchText, 'g');
  if(allowOverlap) {
    var count = 0;
    while(re.exec(fullText)) {count++; re.lastIndex -= searchText.length - 1;}
    return count;
  } else return (fullText.match(re) || []).length || 0;
}

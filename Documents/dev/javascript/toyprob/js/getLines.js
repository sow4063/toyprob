// https://www.codewars.com/kata/the-look-and-say-sequence/train/javascript

/*
From wikipedia:

In mathematics, the look-and-say sequence is the sequence of integers beginning as follows:

1, 11, 21, 1211, 111221, 312211 ...
To generate a member of the sequence from the previous member, read off the digits of the previous member, counting the number of digits in groups of the same digit. For example:

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
1211 is read off as "one 1, then one 2, then two 1s" or 111221.
111221 is read off as "three 1s, then two 2s, then one 1" or 312211.
Your mission is to write a function getLines, which takes an integer "n" as parameter, and returns a comma separated list of the first "n" terms of the sequence. For 0, negative, or NaN parameters, -1 shall be returned.

for example:

getLines(2);   // logs "1,11"
getLines(3);   // logs "1,11,21"
getLines(5);   // logs "1,11,21,1211,111221"
*/

function countNumber(str){
  
  str = '' + str;
  var arr = str.split('');
  
  var ret = '';
  var cnt = 1;

  for( var i = 1; i < arr.length; i++ ) {

  	if( i === arr.length - 1 ) { // last index
      if( arr[i] !== arr[i-1] ) {
	      ret += '' + cnt + '' + arr[i-1];
	      ret += '' + 1 + '' + arr[i];
	    }
	    else {
	    	cnt++;
	    	ret += '' + cnt + '' + arr[i];
	    }
  	}
  	else { // not last index
  		if( arr[i] !== arr[i-1] ) {
	      ret += '' + cnt + '' + arr[i-1];
	      cnt = 1;  
	    }
	    else {
	    	cnt++;
	    }
  	}
    
  }

  return ret;
};

function getLines(line){

  if( line <= 0 ) return -1;
  if( isNaN(line) ) return -1;
  
  var res = [1, 11, 21];

  while( res.length < line ) {
  	var str = res[res.length-1];
  	var ret = countNumber(str);
  	res.push( ret );
  }

  return res.slice(0, line).join(',');
};

module.exports = getLines;

// best practice
function lookSay(n) {
  return ('' + n).replace(/((\d)\2*)/g, function(m) {return m.length + m[0];});
}

function getLines(line) {
  if(isNaN(line) || line < 1) {return -1;}
  var out = [1];
  for(var i = 1; i < line; i++) out.push(lookSay(out[i - 1]));
  return out.join(',');
}

// https://www.codewars.com/kata/make-the-deadfish-swim/train/javascript

/*
Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long.
'i' will increment the value ( initially 0 ).
'd' will decrement the value.
's' will square the value.
'o' will output the value into the return array.
Invalid characters should be ignored.

parse( "iiisdoso" ); // should == [ 8 , 64 ]
*/

function parse( data )
{
  var val = 0;
  var arr = [];

  for( var i = 0; i < data.length; i++ ) {
    if( data[i] == 'i' ) {
      val++;
    }
    else if( data[i] == 's' ) {
      val*= val;
    }
    else if( data[i] == 'd' ) {
      val--;
    }
    else if( data[i] == 'o' ) {
      arr.push(val);
    }

  }

  return arr;
};

module.exports = parse;

// best practice
var map = {
  'i' : function(x){return x + 1;},
  'd' : function(x){return x - 1;},
  's' : function(x){return x * x;}
}

function parse( data )
{
  var array = [], val = 0;
  data.split('').forEach(function(x){
    if(x === 'o'){
      array.push(val);
    } else {
      val = map[x](val);
    }
  });
  return array;
}

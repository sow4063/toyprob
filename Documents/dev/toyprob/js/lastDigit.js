// https://www.codewars.com/kata/5518a860a73e708c0a000027

/*
Description:

For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

E. g.,

lastDigit([3, 4, 2]) === 1
because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits.
lastDigit has to deal with such numbers efficiently.

Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.
*/

function lastDigit(as){

  console.log(as);

  var obj = { 0 : 1, 1 : 1, 2 : 4, 3 : 4, 4 : 2, 5 : 1, 6 : 1, 7 : 4, 8 : 4, 9 : 2 };

  var objrep = { 1 : [1], 2 : [2,4,8,6], 3 : [3,9,7,1], 4 : [4,6], 5 : [5],
                 6 : [6], 7 : [7,9,3,1], 8 : [8,4,2,6], 9 : [9,1]};

  if( as.length === 0 ) {
    return 1;
  }
  else if( as.length === 1 ) {
    return as[0] % 10;
  }
  else if( as.length === 2 ) {
    return Math.pow(as[0] % 10, as[1]) % 10;
  }
  else if( as.length === 3 ) {

    if( as[0] === 0 )
      return 0;

    if( as[0] < 10 ) {
      var key = as[0]
      var mod = Math.pow(as[1], as[2]) % parseInt(obj[key]);
      mod = mod === 0 ? objrep[key].length - 1 : mod - 1;
      console.log( Math.pow(as[1], as[2]), parseInt(obj[key]), mod, objrep[key][mod] );
      return objrep[as[0]][mod];
    }
    else {

      var a = (''+as[0]);
      a = a[a.length-1]; console.log('a = ', a);

      if( parseInt(a) === 0) return 0;

      if( parseInt(a) === 1) return 1;

      var b = (''+as[1]);
      b= b[b.length-1];

      var c = (''+as[2]);
      c = c[c.length-1];

      console.log(a,b,c, a*b*c, (a*b*c)%a);

      //console.log(a,b,c, a*b*c, (a*b*c)%10);
      //console.log(a,b,c, a*b*c, (a*b*c)%a);
      //var res = (a*b*c)%10;
      var mod = (a*b*c)%a;
      mod = (mod === 0 ? objrep[a].length - 1 : mod - 1);

      return objrep[a][mod];
    }

  }
  else {
    var a = (''+as[0]);
    a = a[a.length-1]; console.log('a = ', a);

    if( parseInt(a) === 0) return 0;

    if( parseInt(a) === 1) return 1;
  }

};

module.exports = lastDigit;

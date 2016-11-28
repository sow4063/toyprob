// https://www.codewars.com/kata/calculate-age-in-years/train/javascript

/*
Complete the following function that will return the difference in years (age) for a birthdate,
and optionally a "now" date.
Both arguments to the function are expected to be Date objects.
The returned difference can be either positive or negative.

getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8
*/

// Date.prototype.getAge = function (date) {
//     if (!date) date = new Date();
//     var feb = (date.getMonth() == 1 || this.getMonth() == 1);
//     return ~~((date.getFullYear() + date.getMonth() / 100 +
//         (feb && date.getDate() == 29 ? 28 : date.getDate())
//         / 10000) - (this.getFullYear() + this.getMonth() / 100 +
//         (feb && this.getDate() == 29 ? 28 : this.getDate())
//         / 10000));
// };

function gregorianAge(birthDate, toDate) {
  if( Object.prototype.toString.call( birthDate ) !== '[object Date]')
    birthDate = new Date(birthDate);

  if( typeof toDate == 'undefined' )
    toDate = new Date();
  else if( Object.prototype.toString.call(toDate) !== '[object Date]')
    toDate = new Date(toDate);

  if( toDate == null || birthDate == null )
    return null;

  var monthDiff = toDate.getMonth() - birthDate.getMonth();

  var yearDiff = toDate.getFullYear() - birthDate.getFullYear();
  var diff = monthDiff < 0 || ( monthDiff === 0 && toDate.getDate() < birthDate.getDate() ) ? 1 : 0 ;

  return yearDiff - diff;

};

function getAge(birthDate, nowDate) {
  var today = nowDate || new Date('2013/08/29');
  return gregorianAge( birthDate, today );
};

module.exports = getAge;

// best practice
function getAge(birthDate, nowDate) {
 nowDate = nowDate || new Date();
 var res = nowDate.getFullYear() - birthDate.getFullYear();
 if(nowDate.getMonth() < birthDate.getMonth() || (nowDate.getMonth() == birthDate.getMonth() && nowDate.getDate() < birthDate.getDate())) res --
 return res;
}

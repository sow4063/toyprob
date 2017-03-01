// https://www.codewars.com/kata/51f42b1de8f176db5a0002ae

/*
Description:

This time the input is an array of course-ids that are formatted in the following way:

name-yymm

The return of the function shall first be sorted by yymm, then by the name (which varies in length).
*/

// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
sortme = function( courses ) {

  courses.sort(function(a,b) {
    var a = a.split('-').reverse('').join('');
    var b = b.split('-').reverse('').join('');

    return a > b;

  });

  return courses;
};

module.exports = sortme;

// best practice
function sortme(courses) {
  return courses.sort(function(a, b) {
    a = a.split('-');
    b = b.split('-');

    return a[1] < b[1] ? -1
      : a[1] > b[1] ? 1
      : a[0].localeCompare(b[0]);
  });
}

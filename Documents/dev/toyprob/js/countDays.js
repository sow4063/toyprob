// https://www.codewars.com/kata/count-the-days/train/javascript

/*
Little Annie is very excited for upcoming events. She want's to know how many days she have to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!" 
If the event is today, return "Today is the day!" 
Else, return "x days"

PS: This is my first kata. I hope you have fun^^ 

This kata is part of the Collection "Date fundamentals":

#1 Count the Days!
#2 Minutes to Midnight
#3 Can Santa save Christmas?
#4 How Many Presents?
*/

function countDays(d){

  var today = new Date();
  
  var secondDiff = parseInt( ( d.getTime() - today.getTime() ) / 1000 );
  
  if( secondDiff < 0 ) return 'The day is in the past!';
  if( secondDiff === 0 ) return 'Today is the day!';

  var hourDiff = secondDiff / 60 / 60;

  var dayDiff = Math.round( hourDiff / 24 );
  
  return dayDiff + ' days';
};

module.exports = countDays;

// best practice
function countDays(date) {
  var today = new Date();
  var one_day = 1000 * 60 * 60 * 24;
  var daysFromToday = Math.round((date.getTime() - today.getTime()) / one_day);

  if (daysFromToday < 0) {
    return 'The day is in the past!';
  }
  if (daysFromToday == 0) {
    return 'Today is the day!';
  }
  return `${daysFromToday} days`;
  
}
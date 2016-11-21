// https://www.codewars.com/kata/extract-the-ids-from-the-data-set

/*
Description:

Complete the method so that it returns an array of all ID's passed in.
The data structure will be similar to the following:

var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // should return [1,2,3,4,5]
The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/

function extractIds(data) {
  var str = JSON.stringify(data);
  var num = str.replace(/[^0-9]/g, '');

  var arr = [];
  for( var i = 0; i < num.length; i++ ) {
    arr.push(~~num[i]);
  }

  return arr;
};

module.exports = extractIds;

// best practice
function extractIds(data) {
  let ids  = []
  if ('id' in data) ids.push(data.id);
  if ('items' in data) data.items.forEach(item => ids = ids.concat(extractIds(item)));
  return ids;
}

// clever
function extractIds(data){
  return [].concat.apply([], Object.keys(data).map(function(item) {
    return item === 'id' ? data[item] : extractIds(data[item]);
  }));
}

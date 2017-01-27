// /**
//  * jQuery를 사용하여 column별로 sort 가능한 HTML 테이블을 만듭니다.
//  *
//  * 테이블 머리글을 클릭하면 모든 테이블 row가 해당 column의 값으로 정렬됩니다.
//  * 테이블은 단어, 정수, 소수점 및 날짜(YYYY-MM-DD 형식)를 정렬할수 있어야 합니다
//  * 
//  * index.html에 있는 table을 사용하세요.
//  *
// **/

// //$(function () {
//   // var p;
//   // $( "th" ).click(function() {
//   // 	console.log( 'clicked header', $('this').text() );
//   //   if ( p ) {
//   //     p.appendTo( "tbody" );
//   //     p = null;
//   //   } 
//   //   else {
//   //     p = $( "tbody tr" ).detach();
//   //     console.log(p, p.length);
//   //   }
//   // });

// //});

// jQuery.fn.sortElements = (function(){
 
//     var sort = [].sort;
 
//     return function(comparator, getSortable) {
 
//         getSortable = getSortable || function(){return this;};
 
//         var placements = this.map(function(){
 
//             var sortElement = getSortable.call(this),
//                 parentNode = sortElement.parentNode,
 
//                 // Since the element itself will change position, we have
//                 // to have some way of storing its original position in
//                 // the DOM. The easiest way is to have a 'flag' node:
//                 nextSibling = parentNode.insertBefore(
//                     document.createTextNode(''),
//                     sortElement.nextSibling
//                 );
 
//             return function() {
 
//                 if (parentNode === this) {
//                     throw new Error(
//                         "You can't sort elements if any one is a descendant of another."
//                     );
//                 }
 
//                 // Insert before flag:
//                 parentNode.insertBefore(this, nextSibling);
//                 // Remove flag:
//                 parentNode.removeChild(nextSibling);
 
//             };
 
//         });
 
//         return sort.call(this, comparator).each(function(i){
//             placements[i].call(getSortable.call(this));
//         });
 
//     };
 
// })();

// var st;

// $(window).load(function(){
//   var table = $('table');

//   $('th')
//     .each(function(){

//     var th = $(this);
//     var thIndex = th.index();
//     var inverse = false;

//     th.click(function() {
//       console.log(th.text()); 
      
//       table.find('td').filter(function(){
//         return $(this).index() === thIndex;
//       }).sortElements(function(a, b){
//         return $.text([a]) > $.text([b]) ? inverse ? -1 : 1 : inverse ? 1 : -1;
//       }, function(){
//         return this.parentNode; 
//       });

//       inverse = !inverse;

//     });

//   });
// });

// solution
$(function () {
  var $tbody = $('tbody');
  
  var $rows = $tbody.children();

  var getCellValue = function(row, colIdx){
    var tdDOM = row.children[colIdx];
    return $(tdDOM).text();
  };

  var getType = function(columnIdx){
    var val = getCellValue($('tr')[1], columnIdx); // string
    return isNaN(val) ? 'string' : 'number';
  };

  $('th').on('click', function(){
    var columnIdx = $(this).index();
    var type = getType(columnIdx);

    $rows.detach().sort(function(row1, row2){
      var val1 = getCellValue( row1, columnIdx );  
      var val2 = getCellValue( row2, columnIdx );  

      if( type === 'string' ) {
        return val1 > val2;
      }
      else if( type === 'number' ) {
        return val1 - val2;
      }
    }); 

    $tbody.append($rows);

  });

});




















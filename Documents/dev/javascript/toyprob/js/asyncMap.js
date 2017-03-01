'use strict';

/* asyncMap function을 구현하세요:
 *
 * asyncMap은 2개의 parameter를 가지고 있습니다. asynchronous function이 들어있는 `task`라는 이름의 array와 callback을 받지요.
 * task안의 각 item들은 서로 다른 또다른 callback을 받고 그 callback을 async로 실행합니다. 
 (asyncMap이 받는 callback말고 다른 callback을 task들이 실행하지요)
 *
 * asyncMap으로 전달된 callback은 task들이 실행되고 나온 결괏값들을 array로 담아 argument로 받아옵니다.
 *
 * task들의 callback이 실행되고 나온 결괏값들은 array에 담긴 task들의 순서와 같아야 합니다.
 * task의 모든 callback이 값을 return하면 asyncMap의 callback function은 그 return된 값을 array에 담아 받아와 실행합니다.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // 두번째 callback이 더 적은 timeout을 가지고 있어도 results array는 ['one','two'] 입니다.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

var asyncMap = function(tasks, callback) {
  var result = [];  
  var resultCount = 0;

  // for( let i = 0; i < tasks.length; i++ ) {
  //   tasks[i](function(val){
  //     result[i] = val;
  //     resultCount++;
  //     if( resultCount == tasks.length) {
  //       callback(result);
  //     }
  //   });
  // }
  var promises = tasks.map(function(asyncFunc){
    new Promise(function(resolve){
      asyncFunc(function(val){
        resolve(val);
      })
    })
  })

  return Promise.all(promises)
};

// asyncMap([], cb)
//    .then(function(v){
//     })

module.exports = asyncMap;

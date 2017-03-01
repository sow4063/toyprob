
/* globals _, window */
(function() {
  'use strict';

  window._ = {};

  //====================================================
  //  Day 1
  //====================================================

  //  argument로 받은 value를 그대로 return합니다. 이 function은 그렇게 쓸모
  // 있어 보이지는 않습니다. 그러나 이런것이 있다는것을 기억하고 있으세요.
  //  만약 function을 argument로 받아야하는 higher order function을 사용할시,
  // 유저가 function을 argument로 입력하지 않았을경우 기본 function으로 사용하는데
  // 사용됩니다.
  _.identity = function(val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   *  이 섹션에서는, collection을 argument로 받아 작업하는 function을 볼것입니다.
   * Javascript에서 `collection은 array또는 object를 뜻합니다.
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * 아래 _.first function은 이미 완성이 되었습니다. 아래 _.first와 같이 다른 function들도
   * 작동이 되도록 코딩을 하시면 됩니다.
   * 아래 처럼 이미 완성된 function을 보실경우 그냥 넘어가지 마시고 꼭 읽고 어떠한 기능을 같고
   * 있는지 꼭 이해하세요. 만약 이해하지 않고 그냥 넘어가면 나중에나오는 function들을 구현할때
   * 구현 못하실 정도로 어렵게 느껴지실겁니다.
   *
   */

  //  `array`의 첫 `n`개의 item들을 가지고 있는 array를 return 합니다.
  // 만약 `n`이 `undefined`이면 첫번째 item을 return 합니다.,
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  //  위 `_.first`와 거의 비슷합니다. 첫 `n` item이 아닌 뒤에서 부터 `n` item을 가지고 있는
  // array를 return합니다. 만약 `n`이 `undefined`이면 마지막 item을 return합니다.
  _.last = function(array, n) {
    return n === undefined ? array[array.length - 1] : array.length < n ? array.slice(0) :array.slice(array.length - n);
  };

  //  `iterator(value, key, collection)`를 collection의 item마다 invoke합니다.
  // collection은 array일수도 있고 object일수도 있다는거 기억하세요.
  //
  //  Note: `_.each` function은 `iterator` function을
  // collection의 item마다 invoke만 할뿐 value를 return하지 않습니다.
  _.each = function(collection, iterator) {
    if( collection.length < 1 ) return;

    if( Array.isArray(collection) ) {
      for( var i = 0; i < collection.length; i++ ) {
        iterator( collection[i], i, collection );
      }
    }
    else {
      for( var key in collection ) {
        iterator( collection[key], key, collection );
      }
    }
  };

  //  `array`에서 `target` item이 있는지 찾아 발견된 item의 위치(index)를 return합니다.
  // 만약 없다면  -1 을 return 합니다.
  _.indexOf = function(array, target) {
    //  TIP: `_.indexOf`는 iterate를 하는 function입니다. `_.indexOf`는 여러분들이
    // 참고 하시라고 완성하였습니다. 잘보면 `for` loop을 사용하지 않고 iteration을 해주는
    // `each` function을 사용합니다. 이 `each` function은 여러분이 구현한것입니다.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  //====================================================
  //  최대한 위에서 구현한 method를 사용하여 아래를 구현해보세요.
  //====================================================

  // `truth` test를 pass한 item들을 담은 array를 return합니다. (_.each 사용하여 구현하기)
  _.filter = function(collection, test) {
    var arr = [];
    _.each( collection, function(item) {
      if( test(item) )
        arr.push( item );
    });

    return arr;
  };

  // `truth` test를 pass 못한 item들을 담은 array를 return합니다.
  _.reject = function(collection, test) {
    //  TIP: `_.filter` function body 안의
    // 코드를 복붙하여 조금 변환하지 말고 `_.filter` function을 invoke하여 구현하세요.
    var arr = [];
    _.filter( collection, function(item) {
      if( !test(item) )
        arr.push(item);
    });

    return arr;
  };

  // 같은_값이_없는(duplicate-free) array를 return합니다.
  _.uniq = function(array) {
    var obj = {};
    for( var i = 0; i < array.length; i++ ) {
      obj[array[i]] = array[i];
    }

    var arr = Object.keys(obj);
    return _.map(arr, Number);
  };


  // iterator를 item별로 invoke하여 return된 value를 array에 담아 return합니다.
  _.map = function(collection, iterator) {
    // `_.map` function은 `_.each`와 매우 흡사한 prmitive iteration function
    // 입니다. `_.each`와 다른접이 있다면 새로운 array에 변화된 value를 보관했다 return
    // 한다는 것입니다.
    var arr = [];

    for( var i = 0; i < collection.length; i++ ) {
      arr.push( iterator( collection[i], i, collection) );
    }

    return arr;
 };


  //  array of objects를 input으로 받아 object의 특정 property value들을 array에 담아
  // return합니다.
  //  예) 사람을 표현하는 object을 가지고있는 array를 받아 그 사람 object의 age property
  // value만 array에 담아 return 합니다.
  _.pluck = function(collection, key) {
  /*
   * TIP: `_.map`은 array안의 value를 변환한 value들을 가지고 있는 새로운 array를
   * return 하는 정말 쓸모 있는 function입니다. 아래 `_.pluck`은 `_.map`이 어떻게
   * 사용되는지를 보여주기 위해 완성되었습니다.
   */
    return _.map(collection, function(item) {
      return item[key];
    });
  };

  //  `array`나 `object`에 iterator(accumulator, item)를 item마다 한번씩
  // 반영하여 한개의 값으로 만듭니다.
  // `accumulator`는 전에 call된 iterator에서 return한 value 입니다.
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // `sum`은 6 입니다.

  //  처음 iterator가 돌아갈때 `accumulator`의 값은 reduce의 3번 argument로 받은 value입니다.
  // 만약 3번째 argument를 주지 않을시에는 `array`나 `object`의 첫번째 item을 `accumulator`
  // 로 사용하게 됩니다.
  //
  // 만약 array의 item이 1개밖에 없다면 그값을 return 해주어야합니다.
  // Example:
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   });

  // `identity`는 5여야 합니다. `_.reduce()`에 3번째 argument로 아무것도 받지 않았기 때문에
  //`iterator`는 2번째 item부터 돌아갑니다. 그러나 array에는 2번째 item이 없습니다. 즉 iterator가
  //돌아가지 않으며 어떠한 iterator를 주더라도 `identity`는 5가 됩니다.

  _.reduce = function(collection, iterator, accumulator) {
    var i = 0;

    if( accumulator === undefined ) {
      accumulator = collection[i++];
    }

    if( collection.length === 1 ) {
      return iterator( accumulator, collection[0], 0, collection );
    }

    for( ; i < collection.length; i++ ) {
      accumulator = iterator( accumulator, collection[i], i, collection );
    }

    return accumulator;
  };

  //====================================================
  //  Day 2
  //====================================================

  // `collection`이 `target` value를 가지고 있는지 `===`을 사용하여 있는지 check합니다.
  _.contains = function(collection, target) {
    // TIP: 많은 iteration이 필요한 문제들이 거의 대부분 `_.reduce()`를 사용하여 해결할수 있습니다.
    // 아래 코드는 `_.reudce()`를 사용하여 풀수 있다는것을 보여주기 위해 완성되었습니다.
    console.log(collection, target);
    if( Array.isArray(collection) ) {
      return _.reduce(collection, function(wasFound, item) {
        if (wasFound) {
          return true;
        }

        return item === target;
      }, false);
    }
    else {
      for( var key in collection ) {
        if( collection[key] === target )
          return true;
      }

      return false;
    }

  };


  // `collection`의 element들이 전부 `truth` test를 pass하는지 측정(determine)합니다.
  //`iterator`가 `undefined`이면 기본(default) iterator를 사용합니다.
  _.every = function(collection, iterator) {
    // TIP: reduce()를 사용하여 풀어보세요.
    if( collection.length === 0 ) return true;
    if( iterator === undefined ) iterator = _.identity;

    return _.reduce(collection, function(isPass, item, i ) {
      if( !isPass ) {
        return false;
      }
      return Boolean( iterator( item ) );
    }, true);
  };

  // `collection`의 item중 하나라도 `truth` test를 pass하느지 determine합니다.
  //`iterator`가 `undefined`이면 기본(default) iterator를 사용합니다.
  _.some = function(collection, iterator) {
    // TIP: every()를 잘 사용하면 간단하게 끝납니다.
    if( iterator === undefined ) iterator = _.identity;

    return !_.every( collection, function(item) {
      return !iterator(item);
    });
  };


  /**
   * OBJECTS
   * =======
   *
   * object를 하나로 합치는(merging)하는 function을 재구현 해보겠습니다.
   *
   */

  // 첫 argument로 받은 object에 그 다음 argument들로 받은 object들의 모든 property들을 더하세요.
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1에는 이제 key1, key2, key3들이 있습니다.
  _.extend = function(obj) {
    for( var i = 1; i < arguments.length; i++ ) {
      for( var key in arguments[i] ) {
        obj[key] = arguments[i][key];
      }
    }

    return obj;
  };

  // extend와 같지만, obj에 이미 있는 key들은 덮어쓰기(overwrite)하지 않음.
  _.defaults = function(obj) {
    for( var i = 1; i < arguments.length; i++ ) {
      for( var key in arguments[i] ) {
        if( !obj.hasOwnProperty(key) )
          obj[key] = arguments[i][key];
      }
    }

    return obj;
  };


  /**
   * FUNCTIONS
   * =========
   *
   *  function 디코레이터(decorator)를 사용하도록 하겠습니다. function decorator란 function을
   * argument로 받아 행동하는것이 변경된 새로운 버전의 function을 return하는 function입니다.
   *
   */

  // 최대 1번만 invoke될수 있는 function을 return 합니다. 1번 이상 invoke을 하면 그전에
  // invoke하여 return된 value를 return합니다.
  _.once = function(func) {
    // TIP: 아래 variable들은 전부 "closure scope"입니다.
    // 즉, 아래 variable들은 return 된 새로운 function안에서 계속 보이는 것들입니다.
    var alreadyCalled = false;
    var result;

    //  TIP: 만약 return된 function이 한번도 invoke되지 않았다면 `func` argument로 받은
    // function에게 일을_넘기도록(delegate) 합니다.
    return function() {
      if (!alreadyCalled) {
        // TIP: 한 function에서 받은 arguments를 다른 function으로 넘길때에는 .apply(this, arguments)를 많이 사용합니다.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // 새로운 function은 처음 연산된 결과를 return합니다.
      return result;
    };
  };

  //  많고/비싼 계산을 하는 function의 결괏값(result)를 저장하여 기억하는(Memorize) function을
  // 만드세요. `_.memoize()` function은 primitive들만 argument로 받습니다.
  // `memoize`라는 이름은 oncePerUniqueArgumentList(argument별로_한번씩만)라고 다시 이름을 지정할수 있습니다.
  // `memoize`는 `once`와 거의 같은 일을 합니다. 다른점은 unique argument들 별로  `_.once`가 지정됩니다.
  //
  // `_.memoize`는 새로운 function을 return해야 합니다. 그리고 이 새로운 function이 invoke되면
  // 먼저 받은 argument를 가지고 invoke이 예전에 됬는지 확인을 합니다. 막약 예전에 한번 같은 argument들을 가지고
  // invoke이 되어 result를 return했다면 예전에 return된 result를 다시 return합니다.
  _.memoize = function(func) {
    var memo = {};

    return function() {
      var args = JSON.stringify(arguments);

      if( args in memo ) {
        return memo[args];
      }
      else {
        memo[args] = func.apply(this, arguments);
        return memo[args];
      }
    }
  };

  //  `func` argument로 받은 function을 `wait` argument로 받은 millisecond 숫자만큼 delay하여
  // 3번째 부터 받은 argument들을 사용하여 invoke합니다.
  // Example: _.delay(someFunction, 500, 'a', 'b') 은 `someFunction('a', 'b')`를 500ms후에 invoke합니다.
  _.delay = function(func, wait) {
    var args = Array.prototype.slice.call(arguments,2);
    setTimeout( function() {
      func.apply(this, args);
    }, wait );
  };


  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // `array`안의 내용(content)의 순서를 무작위로 바꿔줍니다.
  // TIP: 이 function의 test 내용(test suite)은 argument로 받은 array를 변형 시키지 않는것도 검사합니다.
  //
  //  array를 copy하는 방법을 알고 싶으시면 아래 링크를 보세요.
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
    var arr = array.slice(0);

    for( var i = 0; i < arr.length; i++ ) {
      var idx = Math.floor( Math.random() * 10 + 1 ) % arr.length;
      var tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }

    return arr;
  };

  //====================================================
  //  Day 3
  //====================================================

  /**
   * ADVANCED
   * =================
   *
   * NOTE: 영어 문서 읽고 예제를 읽는것에 익숙해 지기위해 http://underscorejs.org/ 에서 찾으셔서 어떠한 function
   * 인지 찾아가며 풀어보세요. translate.google.com 추천!
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
    var arr = collection;

    if( typeof functionOrKey === 'function' ) {
      for( var i = 0; i < arr.length; i++ ) {
        arr[i] = functionOrKey.apply(arr[i], args);
      }
    }
    else {
      for( var i = 0; i < arr.length; i++ ) {
        arr[i] = String.prototype[functionOrKey].apply(arr[i]);
      }
    }

    return arr;
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
    var arr = collection;

    if( typeof iterator === 'function') {
      arr.sort(function(a, b){ return iterator(a) > iterator(b);});
    }
    else {
      arr.sort(function(a, b){ return a[iterator] > b[iterator];});
    }

    return arr;
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {

    var args = Array.prototype.slice.call(arguments);
    args.sort(function(a, b){ b.length > a.length;});

    var len = args[0].length;
    var arr = [];

    for( var i = 0; i < len; i++ ) {
      var temp = [];

      for( var j = 0; j < args.length; j++ ) {
        temp.push( args[j][i] || undefined );
      }

      arr.push(temp);
    }

    return arr;
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {

    var arr = [];
    for( var i = 0; i < nestedArray.length; i++ ) {
      if( Array.isArray(nestedArray[i]) ) {
        arr = arr.concat( _.flatten(nestedArray[i]) );
      }
      else {
        arr.push( nestedArray[i] );
      }
    }

    return arr;
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
    var args = Array.prototype.slice.call(arguments);
    var arr = [];

    for( var i = 0; i < args[0].length; i++ ) {
      var v = args[0][i];
      var flag = true;
      for( var j = 1; j < args.length; j++ ) {
        if( !_.contains( args[j], v) ) {
          flag = false;
          break;
        }
      }

      if( flag ) arr.push(v);
    }

    return arr;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {

    var args = Array.prototype.slice.call(arguments, 1);
    var arr = [];

    for( var i = 0; i < array.length; i++ ) {
      var v = array[i];
      var flag = false;
      for( var j = 0; j < args.length; j++ ) {
        if( _.contains( args[j], v ) ) {
          flag = true;
          break;
        }
      }

      if( !flag ) arr.push(v);
    }

    return arr;
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
    var flag = true;

    return function() {
      if( flag ) {
        flag = false;

        setTimeout( function(){
          func();
          flag = true;
        }, wait);
      }
    }

  };


}());

var DoublyLinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;

  function Node(value) {
    var node = {};

    node.value = value;
    node.next = null;
    node.prev = null;

    return node;
  };

  list.addToTail = function(value) {

    var item = Node(value);
    
    if( !list.head ) {
      list.head = item;
      list.tail = item;
      return;
    }

    item.prev = list.tail;  
    list.tail.next = item;
    list.tail = item;

  };

  list.addToHead = function(value) {

      // 입력값을 받아서 새로운 아이템을 만든다.
      var item = Node(value);

      if( list.head === null ) {
        list.head = item;
        list.tail = item;
      }
      else {
        // 헤드의 프리브가 새로운 아이템으로 지정. 
        list.head.prev = item;

        // 아이템의 넥스트를 헤드로 지정.
        item.next = list.head;

        // 헤드가 새로운 아이템을 가리킨다.
        list.head = item;
      }
      
  };

  list.removeHead = function() {
    var value = list.head.value;
    list.head.prev = null;
    list.head = list.head.next;
    return value;
  };

  list.removeTail = function() {

     // 테일의 프리브의 넥스트를 널로 지정한다.
     this.tail.next = null;

     // 테일을 테일의 프리브로 지정한다.
     this.tail = this.tail.prev;
  };

  list.addNode = function(insertPos, value) {
      
      // 삽입할 전 위치의 노드를 찾는다.
      var preNode = list.getNode(insertPos - 1);

      if( !preNode ) {
        list.addHead(value);
        return;
      }
      else if( preNode.next === null) {
        list.addToTail(value);
        return;
      }

      // 새로운 노드를 만든다.
      var newNode = Node(value);

      // 새로운 노드의 넥스트를 전 노드의 넥스트로 지정한다.
      newNode.next = preNode.next;

      // 새로운 노드의 프리브가 전 노드를 지정한다.
      newNode.prev = preNode;

      // 전 노드의 넥스트의 프리브가 새로운 노드를 지정한다.
      preNode.next.prev = newNode;
      
      // 전 노드의 텍스트가 새로운 노드를 지정한다.
      preNode.next = newNode;
      
  };

  list.removeNode = function(targetNumber) {

    // 아이템을 찾는다.
    var item = list.getNode(targetNumber);

    if( !item ) 
      return;

    // 아이템의 프리브의 넥스트를 아이템의 넥스트로 지정한다.
    item.prev.next = item.next;

    // 아이템의 넥스트의 프리브를 아이템의 프리브로 지정한다.
    item.next.prev = item.prev;
      
  };

  list.contains = function(target) {
    var temp = list.head;
    while(temp) {
      if(temp.value === target) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  list.getNode = function(targetNumber) {
      
      // 리스트를 돌면서 다음 노드가 타겟인지 검사한다
      var num = 1;
      var node = list.head;

      while( node ) {
        // 타겟 노드를 찾았으면 타겟 노드를 리턴한다.
        if( num === targetNumber )
          return node;

        num++;

        node = node.next;
      }

      // 못찾은 경우는 널을 리턴한다.
      return null;
  };

  list.traverse = function(traverseType) {

    // 검색 결과를 저장할 배열을 만든다.
    var arr = [];
    var node = null;

    // 타입이 정방향이면 헤드부터 테일까지 검색한다.
    if( traverseType === 'h') {
      
      // 리스트를 돌면서 노드의 검색한다.
      node = list.head;
      
      while( node ) {
        // 노드의 값을 결과 배열에 저장한다.
        arr.push( node.value );

        // 다음 노드를 찾는다.
        node = node.next;
      }
         
    }
    // 아니면 테일부터 헤드까지 검색한다.
    else {

      // 리스트를 돌면서 노드의 검색한다.
      node = list.tail;
      
      while( node ) {

        // 노드의 값을 결과 배열에 저장한다.
        arr.push( node.value );

        if( node.prev === null )
          break; 

        // 다음 노드를 찾는다.
        node = node.prev;

      }


    }

    // 결과 배열을 반환한다.
    return arr;
  };

  return list;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

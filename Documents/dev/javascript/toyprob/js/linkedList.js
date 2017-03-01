/*
 * pseudoclassical instantiation pattern을 사용하여 linked list를 만드세요.
 *
 * linked list는 "addToTail", "removeHead", "makeNode", 와 "contains" method들을
 * 가지고 있어야 합니다.
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

//write methods here.
LinkedList.prototype.addToTail = function(value) {
  var node = this.makeNode(value);
  
  if( !this.tail ) {
  	this.tail = node;
  }
  else {
    this.tail.next = node;
    this.tail = node;	
  }

  if( !this.head )
  	 this.head = node;
};

LinkedList.prototype.removeHead = function() {
  var value = this.head.value;
  
  this.head = this.head.next;

  return value;
};

LinkedList.prototype.contains = function(value) {
  var node = this.head;

  while( node ) {
    if( node.value === value )
      return true;

    node = node.next;
  }

  return false;
};

LinkedList.prototype.makeNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  
  return node;	
};

module.exports = LinkedList;

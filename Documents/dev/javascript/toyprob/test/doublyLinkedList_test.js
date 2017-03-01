describe('DoublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "addToHead", "removeHead", "removeTail" "addNode" "removeNode" "traverse" and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a("function");
    expect(doublyLinkedList.addToHead).to.be.a("function");
    expect(doublyLinkedList.removeHead).to.be.a("function");
    expect(doublyLinkedList.removeTail).to.be.a("function");
    expect(doublyLinkedList.contains).to.be.a("function");
    expect(doublyLinkedList.addNode).to.be.a("function");
    expect(doublyLinkedList.getNode).to.be.a("function");
    expect(doublyLinkedList.traverse).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.tail.prev.value).to.equal(5);
    expect(doublyLinkedList.tail.prev.next.value).to.equal(6);
  });

  it('should designate a new Head when new nodes are added to Head', function(){
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
    doublyLinkedList.addToHead(7);
    expect(doublyLinkedList.head.value).to.equal(7);
    expect(doublyLinkedList.head.next.value).to.equal(5);
    expect(doublyLinkedList.head.next.prev.value).to.equal(7);
  });

  it('should remove the head from the list when removeHead is called', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  it('should remove the node of middle from the list when removeNode is called', function(){
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeNode(2);
    expect(doublyLinkedList.tail.prev.value).to.equal(3);
    expect(doublyLinkedList.head.next.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should add a new node in the middle of list ', function(){
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addNode(3,5);
    
    var node = doublyLinkedList.getNode(3);
    expect(node.prev.value).to.equal(4);
    expect(node.next.value).to.equal(6);

    var node = doublyLinkedList.getNode(4);
    expect(node.prev.value).to.equal(5);
    
  });

  it('should traverse from head to tail', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.traverse('h')).to.eql([3,4,6]);
  })

  it('should traverse from tail to head', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.traverse('t')).to.eql( [6,4,3] );
  })

  // add more tests here to test the functionality of linkedList
});

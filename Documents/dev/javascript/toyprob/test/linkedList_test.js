var assert = require('chai').assert;
var LinkedList = require('../js/linkedList.js');

describe('linkedList', function(){
  it('Basic Tests', function(){
    var list = new LinkedList();

    assert.equal( list.tail, null );
    
    list.addToTail(4);
    list.addToTail(5);

    assert.equal( list.head.value, 4 );
    assert.equal( list.contains(5), true );
    assert.equal( list.contains(6), false );
    assert.equal( list.removeHead(), 4 );
    assert.equal( list.tail.value, 5 );
  });
});

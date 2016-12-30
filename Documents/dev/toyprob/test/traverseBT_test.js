var assert = require('chai').assert;

describe('Binary Tree Traversal', function() {
  it('Basic Tests', function(){

    var Node = function(value) {
      this.data = value;
      this.left = {};
      this.right = {};
    }
    
    var a = new Node(5);
    var b = new Node(10);
    var c = new Node(2);

    a.left = b;
    a.right = c;

    assert.deepEqual( preOrder(a), [a.data, b.data, c.data], "preOrder failed, expected " + [a.data, b.data, c.data].toString());
    assert.deepEqual( preOrder(b), [b.data], "preOrder failed, expected " + [b.data].toString());
    assert.deepEqual( preOrder(c), [c.data], "preOrder failed, expected " + [c.data].toString());

    assert.deepEqual( inOrder(a), [b.data, a.data, c.data], "inOrder failed, expected " + [b.data, a.data, c.data].toString());
    assert.deepEqual( inOrder(b), [b.data], "inOrder failed, expected " + [b.data].toString());
    assert.deepEqual( inOrder(c), [c.data], "inOrder failed, expected " + [c.data].toString());

    assert.deepEqual( postOrder(a), [b.data, c.data, a.data], "postOrder failed, expected " + [b.data, c.data, a.data].toString());
    assert.deepEqual( postOrder(b), [b.data], "postOrder failed, expected " + [b.data].toString());
    assert.deepEqual( postOrder(c), [c.data], "postOrder failed, expected " + [c.data].toString());
  });
});

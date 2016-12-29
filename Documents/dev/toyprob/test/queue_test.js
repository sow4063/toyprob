var assert = require('chai').assert;
var Queue = require('../js/queue.js');

describe("queue", function() {

    var queue;

    before(function() {
        queue = new Queue();
    });

    it("The queue has 'enqueue', 'dequeue', and 'size' method functions.", function() {
        assert.equal( typeof queue.size, 'function' );// "'size' is not defined.");
        assert.equal( typeof queue.enqueue, 'function' );// "'enqueue' is not defined.");
        assert.equal( typeof queue.dequeue, 'function' );//"'dequeue' is not defined.");
    });

    it("The queue has an initial size of 0.", function() {
        assert.equal( queue.size(), 0 );
    });

    it("Calling 'enqueue' on the queue increases the size by 1.", function() {
        queue.enqueue("I'm number one!");
        assert.equal( queue.size(), 1 );
    });

});

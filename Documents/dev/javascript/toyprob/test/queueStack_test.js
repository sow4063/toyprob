var assert = require('chai').assert;
var Queue = require('../js/queueStack.js').Queue;
var Stack = require('../js/queueStack.js').Stack;

describe('queueStack', function(){
	it('Basic Stack Tests', function(){
		var stack = new Stack();

		stack.push('a');
		stack.push('b');
		stack.push('c');

		assert.equal( stack.size(), 3 );
		assert.equal( stack.pop(), 'c' );

		stack.push('d');

		assert.equal( stack.pop(), 'd' );
		assert.equal( stack.pop(), 'b' );
		assert.equal( stack.pop(), 'a' );
		assert.equal( stack.pop(), undefined );

	});

	it('Basic Queue Tests', function(){
		var que = new Queue();

		que.enqueue('a');
		que.enqueue('b');
		que.enqueue('c');

		assert.equal( que.size(), 3 );
		assert.equal( que.dequeue(), 'a' );

		que.enqueue('d');

		assert.equal( que.dequeue(), 'b' );
		assert.equal( que.dequeue(), 'c' );
		assert.equal( que.dequeue(), 'd' );
		assert.equal( que.dequeue(), undefined );

	});
});
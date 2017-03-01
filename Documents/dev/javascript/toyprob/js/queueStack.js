/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this._data = {};
  this._counter = 0;
};

// add an item to the top of the stack
Stack.prototype.push = function(value) {
  this._data[++this._counter] = value;
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  if( this.size() ) {
    return this._removeItem(this._counter--);
  }
};

// remove an item from the bottom of the stack
Stack.prototype.shift = function() {
  if( this.size() ) {
    var idx = this._counter - this.size() + 1;
    return this._removeItem(idx);
  }
};

Stack.prototype._removeItem = function(idx) {
  var value = this._data[idx];
  delete this._data[idx];
  return value;
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return Object.keys(this._data).length;
};


/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  this._inbox = new Stack();
  this._outbox = new Stack();

  this._end = 0;
  this._front = 0;  
};

// called to add an item to the `queue`
Queue.prototype.enqueue = function(value) {
  this._inbox.push(value);
  if( !this._front ) this._front++;
  this._end++;
};

// called to remove an item from the `queue`
Queue.prototype.dequeue = function() {
  if( this.size() ) {
    var value = this._inbox.shift();
    this._outbox.push(value);
    return value;
  }
};

// should return the number of items in the queue
Queue.prototype.size = function() {
  return this._inbox.size();
};

module.exports.Stack = Stack;
module.exports.Queue = Queue;





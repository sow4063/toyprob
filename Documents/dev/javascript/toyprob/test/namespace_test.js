var assert = require('chai').assert;
var MyNamespace = require('../js/namespace.js');

describe('namespacing', function() {
  it('Basic Tests', function() {
    var myObject = new MyNamespace.MyClass('Hello!');
    assert.equal( myObject.sayHello(), 'Hello!' );
  });
});

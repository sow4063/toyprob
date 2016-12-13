var assert = require('chai').assert;
var solution = require('../js/replaceObject.js');

describe('Object Search and Replace', function() {
  // Some garbage data
  var data = {
    foo: "dynamic",
    bar: {
      baz: ["dynamic"]
    },
    dynamic: true
  };

  // Your solution
  var result = solution(data, "static");

  it('Basic Tests', function() {
    assert.isTrue(result.foo === "static");
  });

  it('Basic Tests', function() {
    assert.isTrue(result.bar.baz[0] === "static");
  });

  it('Basic Tests', function() {
    assert.isTrue(result.hasOwnProperty("dynamic"));
  });

  it('Basic Tests', function() {
    assert.isTrue(!result.hasOwnProperty("static"));
  });

  it('Basic Tests', function() {
    assert.isTrue(result === data);
  });
});

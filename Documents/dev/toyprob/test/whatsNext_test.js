var assert = require('chai').assert;
var nextItem = require('../js/whatsNext.js');

describe(' what is up Next', function() {
  it('Basic Tests', function() {
    assert.equal(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
    assert.equal(nextItem(['a', 'b', 'c'], 'd'), undefined);
    assert.equal(nextItem(['a', 'b', 'c'], 'c'), undefined);
    assert.equal(nextItem("testing", "t"), "e");
    function* countFrom(n) { for (let i = n; ; ++i) yield i; }
    assert.equal(nextItem(countFrom(1), 12), 13);
  });
});

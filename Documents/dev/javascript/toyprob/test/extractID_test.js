var assert = require('chai').assert;
var extractIds = require('../js/extractID.js');

describe('Extract ID', function() {
  it('Basic Test', function() {
    var data = {
                id: 1,
                items: [
                  {id: 2},
                  {id: 3, items: [
                    {id: 4},
                    {id: 5}
                  ]}
                ]
               };

    assert.deepEqual(extractIds(data), [1,2,3,4,5]);
  });
});

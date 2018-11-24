const assert = require('assert');
const {map} = require('../map.js');

describe('map test', function() {

  const square = function(element) {
    return element*element;
  }

  it('should return an empty array', function() {
    assert.deepEqual(map(square,[]), []);
  });

  it.only('should return an array of same number of elements', function() {
    assert.deepEqual(map(square,[2]), [4]);
    assert.deepEqual(map(square,[2, 4, 3]), [4, 16, 9]);
    assert.deepEqual(map(square,[6, 7, 8]), [36, 49, 64]);
  });
});

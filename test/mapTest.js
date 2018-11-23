const assert = require('assert');
const {map} = require('../arrayFunctions.js');

describe('map test', function() {

  const square = function(element) {
    return element*element;
  }

  it.only('should return an empty array', function() {
    assert.deepEqual(map(square,[]), []);
  }
  it('should return an array of same number of elements', function() {
    assert.deepEqual(map(square[2]), [4]);
  });
});

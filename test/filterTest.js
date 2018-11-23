const {filter} = require('../arrayFunctions.js');
const assert = require('assert');

describe('filter', function() {
  const isEven = function(number) {
    return !(number%2);
  }

  const isNumberGreaterThan10 = function(number) {
    return (number>10);
  }

  it('should return an empty array', function() {
    assert.deepEqual(filter(isEven, [1]), []);
    assert.deepEqual(filter(isNumberGreaterThan10, [1, 2]), []);
  });
  it('should return an array of even numbers', function() {
    assert.deepEqual(filter(isEven, [0]), [0]);
    assert.deepEqual(filter(isEven, [1, 2]), [2]);
  });
  it('should return an array of numbers greater than 10', function() {
    assert.deepEqual(filter(isNumberGreaterThan10, [11]), [11]);
    assert.deepEqual(filter(isNumberGreaterThan10, [20, 2, 30]), [20, 30]);
  });
});

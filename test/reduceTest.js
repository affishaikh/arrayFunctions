const {reduce} = require('../arrayFunctions.js');
const assert = require('assert');

describe('reduce', function() {
  const sum = function(result, number) {
    return result+number;
  }

  it('should return the sum of array elements', function() { 
    assert.deepEqual(reduce(sum , [1,2]),3);
    assert.deepEqual(reduce(sum , [1,2,3,4,5,6]),21);
  });

  it('should return the only element in the array', function() { 
    assert.deepEqual(reduce(sum , [1]),1);
  });

  it('should return undefined', function() { 
    assert.deepEqual(reduce(sum , []),undefined);
  });

  it('should return sum of elements and initializer', function() { 
    assert.deepEqual(reduce(sum , [1], 2), 3);
    assert.deepEqual(reduce(sum , [1, 2, 3, 4, 5, 6], 10), 31);
  });
});

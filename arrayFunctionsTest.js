const {filter} = require('./arrayFunctions.js');
const assert = require('assert');

const filterTest = function(functionName, inputArray, expectedOutputArray) {
  assert.deepEqual(filter(functionName, inputArray), expectedOutputArray);
}

const isEven = function(number) {
  return !(number%2);
}

const isNumberGreaterThan10 = function(number) {
  return (number>10);
}

filterTest(isEven, [1], []);
filterTest(isEven, [0], [0]);
filterTest(isEven, [1, 2], [2]);
filterTest(isNumberGreaterThan10, [1, 2], []);
filterTest(isNumberGreaterThan10, [11], [11]);
filterTest(isNumberGreaterThan10, [20, 2, 30], [20, 30]);
console.log("All tests passed...");

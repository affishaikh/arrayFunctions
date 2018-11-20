const {filter} = require('./arrayFunctions.js');
const assert = require('assert');

const filterTest = function(functionName, inputArray, expectedOutputArray) {
  assert.deepEqual(filter(functionName, inputArray), expectedOutputArray);
}

const isEven = function(number) {
  return !(number%2);
}

filterTest(isEven, [1], []);
filterTest(isEven, [0], [0]);
filterTest(isEven, [1, 2], [2]);
console.log("All tests passed...");

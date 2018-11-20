const {reduce} = require('./arrayFunctions.js');
const assert = require('assert');

const reduceTester = function(testData) {
  let {functionName, inputArray, expectedOutput, initializer} = testData;
  assert.deepEqual(reduce(functionName, inputArray, initializer), expectedOutput);
}

const sum = function(result, number) {
  return result+number;
}

const reduceTest = function() {
  let testData = {functionName: sum, inputArray: [1,2], expectedOutput: 3};
  reduceTester(testData);
  testData = {functionName: sum, inputArray: [1,2,3,4,5,6], expectedOutput: 21};
  reduceTester(testData);
  testData = {functionName: sum, inputArray: [1], expectedOutput: 1};
  reduceTester(testData);
  testData = {functionName: sum, inputArray: [], expectedOutput: undefined};
  reduceTester(testData);
  testData = {functionName: sum, inputArray: [1],initializer: 2, expectedOutput: 3};
  testData = {functionName: sum, inputArray: [1, 2, 3, 4, 5, 6],initializer: 10, expectedOutput: 31};
  reduceTester(testData);
}

reduceTest();
console.log("reduce tests passed...");

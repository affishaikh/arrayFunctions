const {reduce} = require('./arrayFunctions.js');
const assert = require('assert');

const reduceTester = function(testData) {
  let {functionName, inputArray, expectedOutput} = testData;
  assert.deepEqual(reduce(functionName, inputArray), expectedOutput);
}

const sum = function(result, number) {
  return result+number;
}

const reduceTest = function() {
  let testData = {functionName: sum, inputArray: [1,2], expectedOutput: 3};
  testData = {functionName: sum, inputArray: [1,2,3,4,5,6], expectedOutput: 21};
  testData = {functionName: sum, inputArray: [1], expectedOutput: 1};
  testData = {functionName: sum, inputArray: [], expectedOutput: undefined};
  reduceTester(testData);
}

reduceTest();
console.log("reduce tests passed...");

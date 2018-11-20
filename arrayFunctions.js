exports.filter = function(functionName, inputArray) {
  let result = [];
  for(let element of inputArray) {
    let isElementToBeStored = functionName(element);
    if(isElementToBeStored) {
      result.push(element);
    }
  }
  return result;
}

exports.reduce = function(functionName, inputArray, initializer) {
  if(!inputArray.length) {
    return undefined;
  }
  let result = inputArray[0];
  let index = 1;
  if(initializer != undefined) {
    result = initializer;  
    index = 0;
  }
  if(inputArray.length == 1 && initializer == undefined) {
    return result;
  }
  for(; index < inputArray.length; index++) {
    result = functionName(result, inputArray[index]);
  }
  return result;
}

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

exports.reduce = function(functionName, inputArray) {
  if(!inputArray.length) {
    return undefined;
  }
  let result = inputArray[0];
  if(inputArray.length == 1) {
    return result;
  }
  for(let index = 1; index < inputArray.length; index++) {
    result = functionName(result, inputArray[index]);
  }
  return result;
}

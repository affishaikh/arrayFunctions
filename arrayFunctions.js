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

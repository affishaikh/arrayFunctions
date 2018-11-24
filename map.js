const square = function(element) {
  return element * element;
}

const index = {
    index : 0,
    lookup: function() { return this.index},
    increase: function() { this.index++ },
    reset: function() { this.index=0 }
};

const map = function(mapper, array) {
  let result = [];
  let element;
  if(index.lookup() == array.length-1) { 
    element = mapper(array[index.lookup()]);
    result.unshift(element);
    return result;
  }
  element = mapper(array[index.lookup()]);
  index.increase();
  result = map(mapper, array);
  result.unshift(element);
  return result;
}

console.log(map(square, [2,4]));

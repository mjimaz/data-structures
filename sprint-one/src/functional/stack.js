var Stack = function() {
  var someInstance = {};
  var stackSize = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    
    if (stackSize > 0) {
      stackSize--;
      return someInstance[stackSize];
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};

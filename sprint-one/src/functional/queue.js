var Queue = function() {
  var someInstance = {};
  var queueSize = 0;
  var firstItem = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[firstItem + queueSize] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    if(queueSize > 0){
      queueSize--;
      return someInstance[firstItem++];
    }
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};

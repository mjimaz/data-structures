var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.queueSize = 0;
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return 0;
};


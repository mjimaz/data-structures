var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.stackSize = 0;
  newStack.storage = {};

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){
  return this.stackSize;
};

stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function(){
  if (this.stackSize > 0) {
    this.stackSize--;
    return this.storage[this.stackSize];
  }
};
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;

};

var newStack = new Stack();

Stack.prototype.size = function() {
  return this.stackSize;
};

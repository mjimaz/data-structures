var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.storage = {};
  this.firstItem = 0;
};

Queue.prototype.size = function(){
  return this.queueSize;
};

Queue.prototype.enqueue = function(value){
  this.queueSize++;
};

Queue.prototype.dequeue = function(){
  if(this.queueSize >0){
    this.queueSize--;
  }
};

var newQueue = new Queue();

var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.treeMethods);

  tree.value = value;
  tree.right = null;
  tree.left = null;

  tree.minDepth = 1;
  tree.maxDepth = 1;
  return tree;
};


BinarySearchTree.treeMethods = {};


BinarySearchTree.treeMethods.insert = function(value){

  if (value > this.value) {
    if (this.right) {
      this.right = this.right.insert(value) || this.right;
    } else {
      this.right = BinarySearchTree(value);
    }
  } else if (value < this.value){
    if (this.left) {
      this.left = this.left.insert(value) || this.left;
    } else {
      this.left = BinarySearchTree(value);
    } 
  }

  this.updateDepths();
  return (this.maxDepth/this.minDepth > 2 ? this.balanceTree() : this);
};

BinarySearchTree.treeMethods.contains = function(value){
  if (value === this.value) {
    return true;
  } else if (value > this.value) {
    return !!this.right && this.right.contains(value);
  } else {
    return !!this.left && this.left.contains(value);
  }
};

BinarySearchTree.treeMethods.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.treeMethods.ascendingLog = function(callback){

  if (this.left) {
    this.left.ascendingLog(callback);
  }
  callback(this.value);
  if (this.right) {
    this.right.ascendingLog(callback);
  }
};

BinarySearchTree.treeMethods.breadthFirstLog = function(callback){
  if (this.left) {
    this.left.breadthFirstLog(callback);
  }
  if (this.right) {
    this.right.breadthFirstLog(callback);
  }
  callback.call(this);
};

BinarySearchTree.treeMethods.updateDepths = function(){
  this.breadthFirstLog(function(){
    this.minDepth = Math.min(this.left && this.left.minDepth, this.right && this.right.minDepth) + 1;
    this.maxDepth = Math.max(this.left && this.left.maxDepth, this.right && this.right.maxDepth) + 1;
  });
  return this;
};

BinarySearchTree.treeMethods.toSortedList = function() {
  var sortedList = new DoublyLinkedList();
  this.ascendingLog(sortedList.addToTail.bind(sortedList));
  return sortedList;
};

BinarySearchTree.treeMethods.balanceTree = function(){
  var sortedList = this.toSortedList();

  function recursionBalance(head, tail){
    
    var middlePointer = sortedList.findMiddle(head, tail);
    if (middlePointer === null) {
      return null;
    }
    var newTree = BinarySearchTree(middlePointer.value);

    newTree.left = recursionBalance(head, middlePointer.previous);
    newTree.right = recursionBalance(middlePointer.next, tail);
    
    return newTree;
  }
  
  return recursionBalance(sortedList.head, sortedList.tail).updateDepths();
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 // insert has a log(n) time complexity
 // contains has a log(n) time complexity
 // depthFirstLog has n time complexity

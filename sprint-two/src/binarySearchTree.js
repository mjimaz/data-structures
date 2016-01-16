var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.treeMethods);

  tree.value = value;
  tree.right = null;
  tree.left = null;

  return tree;
};


BinarySearchTree.treeMethods = {};


BinarySearchTree.treeMethods.insert = function(value){
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else if (value < this.value){
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    } 
  }
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
  
  return recursionBalance(sortedList.head, sortedList.tail);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 // insert has a log(n) time complexity
 // contains has a log(n) time complexity
 // depthFirstLog has n time complexity

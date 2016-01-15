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

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

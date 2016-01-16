var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  childTree.parent = this;
  this.children.push(childTree);

};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  var childHasTarget = false;
  for (var i = 0; i < this.children.length; i++) {
    childHasTarget = this.children[i].contains(target);
    if (childHasTarget) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function () {
  var removedTreeValue = this.value;

  _.each(this.parent.children, function(child, childIndex, collection){
    if (child.value === removedTreeValue) {
      collection.splice(childIndex, 1);
    }
  });

  this.parent = null;
};

treeMethods.traverse = function(callback) {
  callback.call(this); //(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild has constant time complexity

// contains has linear time complexity because every node must be
// visited before you can determine that a tree does NOT contain
// the target in the worst case scenario
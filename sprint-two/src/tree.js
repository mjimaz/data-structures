var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild has constant time complexity

// contains has linear time complexity because every node must be
// visited before you can determine that a tree does NOT contain
// the target in the worst case scenario
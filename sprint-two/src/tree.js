var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);

  this.children.push(childTree);
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

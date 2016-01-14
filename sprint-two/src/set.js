var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return item in this._storage;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // we assume key lookups in object are constant time
 // add has a constant time complexity
 // contains has a constant time complexity
 // remove has a constant time complexity

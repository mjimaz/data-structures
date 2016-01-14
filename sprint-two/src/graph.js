

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.connections = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.indexOf(this.nodes, node) > -1;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = _.indexOf(this.nodes, node);
  if (index > -1) {
      this.nodes.splice(index, 1);
  }

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(fromNode in this.connections){
    return  _.indexOf(this.connections[fromNode], toNode) > -1;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.contains(fromNode) && this.contains(toNode)){
    
    if(!(fromNode in this.connections)){
      this.connections[fromNode] = [];
    }
    this.connections[fromNode].push(toNode);

    if(!(toNode in this.connections)){
      this.connections[toNode] = [];
    }
    this.connections[toNode].push(fromNode);
  
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    
    if (!list.head) {
      list.head = node;
    }
    if(list.tail){
      list.tail.next = node;
    }
    list.tail = node;

  };

  list.removeHead = function() {
    var formerHead = list.head;
    if(list.head){
      list.head = list.head.next;
    }
    return formerHead.value;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

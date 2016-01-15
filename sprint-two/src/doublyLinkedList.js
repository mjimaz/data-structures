var doublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};
  doublyLinkedList.prototype.addToTail = function(value) {
    var node = Node(value);
    
    if (!list.head) {
      list.head = node;
    }
    if(list.tail){
      list.tail.next = node;
    }
    list.tail = node;

  };

  doublyLinkedList.prototype.removeHead = function() {
    var formerHead = list.head;
    if(list.head){
      list.head = list.head.next;
    }
    return formerHead.value;
  };

  doublyLinkedList.prototype.contains = function(target) {
    var currentNode = list.head;

    while(currentNode){
      if(currentNode.value === target){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
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

// addToTail() has constant time complexity because we always know
// the location of the tail

// removeHead() also has constant time complexity because we always
// know the location of head

// contains() has a time complexity that is proportionate to the number
// of items in the list




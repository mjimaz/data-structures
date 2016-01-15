var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var node = new DoublyLinkedListNode(value);
  
  if (!this.head) {
    this.head = node;
  }
  if(this.tail){
    this.tail.next = node;
    node.previous = this.tail;
  }
  this.tail = node;

};

DoublyLinkedList.prototype.removeHead = function() {
  var formerHead = this.head;
  if(this.head){
    this.head = this.head.next;
  }
  return formerHead.value;
};

DoublyLinkedList.prototype.contains = function(target) {
  var currentNode = this.head;

  while(currentNode){
    if(currentNode.value === target){
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

DoublyLinkedList.prototype.removeTail = function(){
  var formerTail = this.tail;
  if(this.tail){
    this.tail = this.tail.previous;
    this.tail.next = null;
  }
  return formerTail.value;
};

DoublyLinkedList.prototype.addToHead = function(value){
  var node = new DoublyLinkedListNode(value);
  
  if (!this.tail) {
    this.tail = node;
  }
  if(this.head){
    this.head.previous = node;
    node.next = this.head;
  }
  this.head = node;  

};

var DoublyLinkedListNode = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
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

var myList = new DoublyLinkedList();

myList.addToTail(6);


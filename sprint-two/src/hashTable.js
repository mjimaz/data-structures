

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  //check if item is in hashtable
  var arrayOfBuckets = this._storage.get(index);
  
  //bucket is not empty
  if(arrayOfBuckets){
    arrayOfBuckets.push([k,v]);
  }else{
    arrayOfBuckets = [[k,v]];
    this._storage.set(index, arrayOfBuckets);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfBuckets = this._storage.get(index);
  var value; 

  if(arrayOfBuckets){
    _.each(arrayOfBuckets, function(bucket){
      if(bucket[0] === k){
        value = bucket[1];
      }
    });
  }
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// Assuming that the hash function has a constant time complexity
// insert has a constant time complexity
// retrieve has a constant time complexity, because we know the index in the hash table
// then we need to iterate through the array of tuplets which are insignificant 
// in the grand scheme of the hash table operations
// remove has a constant time complexity 


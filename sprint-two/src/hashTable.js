

var HashTable = function() {
  this._limit = 8;
  this._tupleCount = 0;
  this._storage = LimitedArray(this._limit);

  this.initializeBuckets(this._storage);
};

HashTable.prototype.initializeBuckets = function(storage) {
  for (var i = 0; i < this._limit; i++) {
    storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTuples = this._storage.get(index);
  var itemExist = false;
 
  _.each(arrayOfTuples, function(bucket){
    if(bucket[0] === k){
      bucket[1] = v;
      itemExist = true;
    }
  });

  if(!itemExist){
    arrayOfTuples.push([k,v]);
    this._tupleCount++;
  }

  // rehash if hash table is too full
  if (this._tupleCount/this._limit > 0.75) {
    this.rehash(this._limit*2);
  }
};

HashTable.prototype.rehash = function(size){
  this._limit = size;
  var newStorage = LimitedArray(this._limit);

  this.initializeBuckets(newStorage);

  var hashPointer = this;

  this._storage.each(function(arrayOfTuples){
    var newStorageIndex;
    _.each(arrayOfTuples, function(tupleBucket){
      newStorageIndex = getIndexBelowMaxForKey(tupleBucket[0], hashPointer._limit);
      
     newStorage.get(newStorageIndex).push(tupleBucket);

    });
  });
  this._storage = newStorage;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTuples = this._storage.get(index);
  var value; 

  if(arrayOfTuples){
    _.each(arrayOfTuples, function(bucket){
      if(bucket[0] === k){
        value = bucket[1];
      }
    });
  }

  return value;
};

HashTable.prototype.remove = function(k) {
  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTuples = this._storage.get(bucketIndex);
  var removedItem;
  
  _.each(arrayOfTuples, function(tuple, tupleIndex){
    if(tuple[0] === k){
      removedItem = arrayOfTuples.splice(tupleIndex, 1);
    }
  });
  
  if (removedItem) {
    this._tupleCount--;
  }
  
  if (this._tupleCount/this._limit < 0.25) {
    this.rehash(Math.ceil(this._limit/2));
  }
  return removedItem;
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


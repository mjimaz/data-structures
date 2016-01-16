

var HashTable = function() {
  this._limit = 8;
  this._tupleCount = 0;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  //check if item is in hashtable
  var arrayOfTuples = this._storage.get(index);
  
  //bucket is not empty
  if(arrayOfTuples){

    //check if item is already a tuplet
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

  }else{
    arrayOfTuples = [[k,v]];
    this._storage.set(index, arrayOfTuples);
    this._tupleCount++;
  }

  // calculate % fullness
  if (this._tupleCount/this._limit > 0.75) {
    this._limit *= 2;
    var newStorage = LimitedArray(this._limit);

    for (var i = 0; i < this._limit; i++) {
    newStorage.set(i, []);
  }
    
    var hashPointer = this;

    this._storage.each(function(arrayOfTuples){
      var newStorageIndex;
      _.each(arrayOfTuples, function(tupleBucket){
        newStorageIndex = getIndexBelowMaxForKey(tupleBucket[0], hashPointer._limit);
        
       newStorage.get(newStorageIndex).push(tupleBucket);

      });
    });
    this._storage = newStorage;
  }
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


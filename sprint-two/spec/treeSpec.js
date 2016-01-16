describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('single node tree should have null parent', function() {
    expect(tree.parent).to.equal(null);
  });

  it('all trees that have parents should have a non null parent node', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(4);
    tree.children[0].addChild(3);
    expect(tree.children[0].parent).to.equal(tree);
    expect(tree.children[0].children[1].parent).to.equal(tree.children[0]);
  });

  it('remove trees should disassociates the tree with its parent (in both directions)', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(4);
    tree.children[0].addChild(3);
    tree.children[1].addChild(15);
    tree.children[1].addChild(16);
    var removedTree = tree.children[1];
    tree.children[1].removeFromParent();
    expect(tree.children[1]).to.equal(undefined);
    expect(removedTree.parent).to.equal(null); 
  });

    it('should access all nodes with callback function', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(4);
    tree.children[0].addChild(3);
    tree.traverse(function(){
      this.value *=2;
    });    
    expect(tree.children[0].children[0].value).to.equal(8); 
  });


});

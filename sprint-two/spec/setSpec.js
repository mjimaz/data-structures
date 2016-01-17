describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });


  it('should be able to handle numberic inputs', function(){
    set.add(2);
    set.add(3);
    expect(set.contains(2)).to.equal(true);
    expect(set.contains(3)).to.equal(true);
  });

  it('should be able to handle object inputs', function(){
    var meryam = {name: "Meryam", favColor: "blue"};
    var elliot = {name: "Elliot", favColor: "red"};
    set.add(elliot);
    set.add(meryam);
    expect(set.contains(meryam)).to.equal(true);
    expect(set.contains(elliot)).to.equal(true);
  });

  it('should be able to handle array inputs', function(){
    var arrrrrr = [1,2,3, "a", "b", "c"];
    var pirates = ["long", {john: "silver"}];
    set.add(arrrrrr);
    set.add(pirates);
    expect(set.contains(pirates)).to.equal(true);
    expect(set.contains(arrrrrr)).to.equal(true);
  });
});

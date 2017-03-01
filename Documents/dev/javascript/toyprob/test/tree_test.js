describe('Tree with Parent link', function(){
  var tree = Tree();

  beforeEach(function() {
     tree = Tree();
  });

  it('should have methods named "addChild" "contains" "containsInParent" "removeFromParent"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.containsInParent).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.traverse).to.be.a("function");
  });

  it('should have property named "value"', function() {
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    tree.addChild(6, 5);
    expect(tree.contains(6)).to.equal(true);
  });

  it('should return true for a value that the tree removeFromParent', function(){
    tree.addChild(5);
    tree.addChild(4, 5);
    tree.addChild(6, 5);
    
    expect( tree.getTree(4).parent).to.equal(5);
    expect( tree.getTree(5).children[0].value).to.equal(4);
    expect( tree.getTree(5).children[1].value).to.equal(6);

    tree.removeFromParent(4);
    expect( tree.getTree(5).children[0].value).to.equal(6);
  });

  it('should return true for a value that the tree removeFromParent for three level', function(){
    tree.addChild(5);
    tree.addChild(4, 5);
    tree.addChild(6, 4);
    tree.addChild(7, 4);
    tree.addChild(8, 5);
    
    expect( tree.getTree(4).parent).to.equal(5);
    expect( tree.getTree(6).parent).to.equal(4);
    expect( tree.getTree(7).parent).to.equal(4);
    expect( tree.getTree(8).parent).to.equal(5);

    tree.removeFromParent(4);
    expect( tree.getTree(5).children[0].value).to.equal(8);
    expect( tree.getTree(5).children.length).to.equal(1);
  });

  it('should invoke traverse function', function(){
    function fn(value) {
      return value + 3;
    };

    tree.addChild(5);
    tree.addChild(4, 5);
    tree.addChild(6, 4);
    tree.addChild(7, 4);
    tree.addChild(8, 5);

    tree.traverse(fn);
    
    expect( tree.getTree(8).value).to.equal(8);
    expect( tree.getTree(7).value).to.equal(7);
    expect( tree.getTree(9).value).to.equal(9);
    expect( tree.getTree(10).value).to.equal(10);
    expect( tree.getTree(11).value).to.equal(11);

  });

});
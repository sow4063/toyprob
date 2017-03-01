var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value, parent) {
	// if parent is undefined, add a child to children(==children of root).
	var tree = Tree(value);

	if( parent === undefined || this.children.length === 0) {
		tree.parent = parent;
		this.children.push( tree );
		return true;
	}
	else {
		// find the parent
		if( parent === this.value ) {
		  tree.parent = parent;
		  this.children.push( tree );
		  return true;
		}
	    else {
		  // add new child to the parent
		  for( var i = 0; i < this.children.length; i++ ) {
		  	var child = this.children[i];
		  	if( child.value === parent ) {
		  		tree.parent = parent;
		  		child.children.push( tree );
		  		return true;
		  	}
		  	else {
		  		if( child.addChild(value, parent) )
		  			return true;
		  	}
		  }	
		}
	    
	}

	return false;
	
};

treeMethods.contains = function(target) {
	
	if( this.value === target ) {
		return true;
	}

	for( var i = 0; i < this.children.length; i++ ) {
		if( this.children[i].contains( target ) ) {
			return true;	
		}
	}

	return false;

};

treeMethods.containsInParent = function(child, target) {
	// 
};

treeMethods.traverse = function() {

};

treeMethods.removeFromParent = function(targetChild) {
	// find the target child tree.
	var childTree = this.getTree( targetChild );

	// if the child is not exist, return false
	if( !childTree )
		return false;

	// get the parent link value.
	var parentTree = this.getTree( childTree.parent );
	
	// delete the target child in paretn children list.
	for(var i = 0; i < parentTree.children.length; i++ ) {
		if( parentTree.children[i].value === targetChild ) {
			return parentTree.children.splice( i, 1 );
		}
	}
	
	return false;
};

treeMethods.getTree = function(target) {
	// check the self value.
	if( this.value === target )
		return this;

	// check the children list of this tree.
	for(var i = 0; i < this.children.length; i++ ) {
	  // if the value of the child is target child, return child tree.
	  var tree = this.children[i].getTree( target );
	  if(  tree ) {
	  	return tree;
	  }

	}

	// if not found, return false
	return false;
};

treeMethods.traverse = function(callback) {

	if( this.value ) {
		this.value = callback( this.value );
	}

	this.children.forEach(function(child){
		child.traverse( callback );
	});

};
















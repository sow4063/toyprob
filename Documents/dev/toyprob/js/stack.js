var Stack = function() {
	this.storage = {};
};


Stack.prototype.size = function() {
	return Object.keys(this.storage).length;
};

Stack.prototype.push = function(value) {
	this.storage[this.size() + 1] = value; 
};

Stack.prototype.pop = function() {
	var len = this.size();
	if(len > 0) {
		var v = this.storage[len];
		delete this.storage[len];
		return v;
	}
};
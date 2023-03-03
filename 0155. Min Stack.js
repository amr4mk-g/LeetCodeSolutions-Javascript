var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push([val, this.stack.length ? Math.min(val, this.getMin()) : val]);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};

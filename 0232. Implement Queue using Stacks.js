var MyQueue = function() {
    this.stack = [];
};

MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

MyQueue.prototype.pop = function() {
    var keep = [];
    var element;
    while(this.stack.size() > 1){
        keep.push(this.stack.pop());
    }
    var element = this.stack.pop();
    while(keep.size() > 0){
        this.stack.push(keep.pop());
    }
    return element;
};

MyQueue.prototype.peek = function() {
    var keep = [];
    var element ;
    while(this.stack.size() > 1){
        keep.push(this.stack.pop());
    }
    var element = this.stack.pop();
    keep.push(element);
    while(keep.size() > 0){
        this.stack.push(keep.pop());
    }
    return element;
};

Array.prototype.size = function () {
  return this.length;
};

MyQueue.prototype.empty = function() {
    return this.stack.size() == 0;
};

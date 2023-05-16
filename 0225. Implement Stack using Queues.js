var MyStack = function() {
    this.queue = []; 
    this.tmp = []; 
};

MyStack.prototype.push = function(x) {
     this.queue.push(x);
};

MyStack.prototype.pop = function() {
    while (this.queue.length > 1){
        this.tmp.push(this.queue.shift());
    }
    var ele = this.queue.shift();
    this.queue = this.tmp;
    this.tmp = [];
    return ele;
};

MyStack.prototype.top = function() {
    while (this.queue.length > 1){
        this.tmp.push(this.queue.shift());
    }
    var ele = this.queue.shift();
    this.tmp.push(ele);
    this.queue = this.tmp;
    this.tmp = [];
    return ele;
};

MyStack.prototype.empty = function() {
    return this.queue.length == 0;
};

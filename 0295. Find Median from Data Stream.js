var MedianFinder = function() {
    this.max = new MaxHeap();
    this.min = new MinHeap(); 
    this.even = true;
};

MedianFinder.prototype.addNum = function(num) { // O(log n)
    if (this.even) {
        this.max.add(num);
        this.min.add(this.max.remove());
    } else {
        this.min.add(num);
        this.max.add(this.min.remove());
    }
    this.even = !this.even;
};

MedianFinder.prototype.findMedian = function() { // O(1) 
    if (this.even) return (this.max.get() + this.min.get()) / 2;
    else return this.min.get();
};

class MinHeap { 
    constructor() {this.values = [];}
    add(v) {   
           this.values.push(v);        this.bubbleUp(this.values.length-1);   
    }
    size() {
        return this.values.length;
    }
    get() {
        return this.values[0];
    }
    remove() {    
           [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]];
           let min = this.values.pop();         this.bubbleDown(0);        return min;   
    }
    bubbleUp(i) {   let max = i, parent = Math.floor((i-1)/2);
           if(parent >= 0 && this.values[parent] > this.values[max]) max = parent;
           if(max != i) { [this.values[i], this.values[max]] = [this.values[max], this.values[i]];     this.bubbleUp(max); } 
    }
    bubbleDown(i) {    let min = i, l = 2*i+1, r = 2*i+2;
           if(l < this.values.length && this.values[l] < this.values[min]) min = l;
           if(r < this.values.length && this.values[r] < this.values[min]) min = r;
           if(min != i) { [this.values[i], this.values[min]] = [this.values[min], this.values[i]];     this.bubbleDown(min); }
    }
}


class MaxHeap { 
    constructor() {this.values = [];}
    add(v) {   
           this.values.push(v);        this.bubbleUp(this.values.length-1);    
    }
    size() {
        return this.values.length;
    }
    get() {
        return this.values[0];
    }
    remove() {    
           [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]];
           let min = this.values.pop();         this.bubbleDown(0);        return min;   
    }
    bubbleUp(i) {   let max = i, parent = Math.floor((i-1)/2);
           if(parent >= 0 && this.values[parent] < this.values[max]) max = parent;
           if(max != i) { [this.values[i], this.values[max]] = [this.values[max], this.values[i]];     this.bubbleUp(max); } 
    }
    bubbleDown(i) {    let min = i, l = 2*i+1, r = 2*i+2;
           if(l < this.values.length && this.values[l] > this.values[min]) min = l;
           if(r < this.values.length && this.values[r] > this.values[min]) min = r;
           if(min != i) { [this.values[i], this.values[min]] = [this.values[min], this.values[i]];     this.bubbleDown(min); }
    }
}

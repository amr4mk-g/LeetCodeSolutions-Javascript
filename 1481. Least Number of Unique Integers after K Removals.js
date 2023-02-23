var findLeastNumOfUniqueInts = function(arr, k) {
    let map = new Map();
    for (let v of arr) map.set(v, map.get(v)+1 || 1);
    let heap = new MinHeap(map.size);
    for (let [k,v] of map) heap.add(v); 
    for (let i=0; i<k; i++) {
        let temp = heap.remove();
        if (temp != 1) heap.add(temp-1); 
    }
    return heap.size();
};

class MinHeap {
    constructor(capacity) {this.capacity = capacity;   this.values = [];}
    size() { return this.values.length; }
    add(v) {   
      this.values.push(v);        
      this.bubbleUp(this.values.length-1); 
      if(this.values.length > this.capacity) this.remove();   
    }
    remove() {    
      [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]];
      let min = this.values.pop();         
      this.bubbleDown(0);        
      return min;   
    }
    bubbleUp(i) {   
      let max = i, parent = Math.floor((i-1)/2);
      if(parent >= 0 && this.values[parent] > this.values[max]) max = parent;
      if(max != i) { 
        [this.values[i], this.values[max]] = [this.values[max], this.values[i]];     
        this.bubbleUp(max); 
      } 
    }
    bubbleDown(i) {    
      let min = i, l = 2*i+1, r = 2*i+2;
      if(l < this.values.length && this.values[l] < this.values[min]) min = l;
      if(r < this.values.length && this.values[r] < this.values[min]) min = r;
      if(min != i) { 
        [this.values[i], this.values[min]] = [this.values[min], this.values[i]];     
        this.bubbleDown(min); 
      }
    }
}

function topKFrequent (nums, k) {
    let map = new Map();  
    for (let v of nums) map.set(v, map.get(v)+1 || 1);
    let n = nums.length;
    let heap = new MaxHeap(n);
    for (let [k,v] of map) heap.add([v,k]);
    let result = [];
    for (let i=0; i<k; i++) result.push(heap.remove()[1]);
    return result;
}

class MaxHeap { 
    constructor(size) {
        this.size = size;   
        this.values = [];
    }
    add(v) {   
        this.values.push(v);        
        this.bubbleUp(this.values.length-1); 
        if(this.values.length > this.size) this.remove();   
    }
    remove() {    
        [this.values[0], this.values[this.values.length-1]] =
               [this.values[this.values.length-1], this.values[0]];
        let min = this.values.pop();         
        this.bubbleDown(0);        
        return min;   
    }
    bubbleUp(i) {   
        let max = i, parent = Math.floor((i-1)/2);
        if(parent >= 0 && this.values[parent][0] < this.values[max][0]) max = parent;
        if(max != i) { 
            [this.values[i], this.values[max]] = [this.values[max], this.values[i]];    
            this.bubbleUp(max); 
        } 
    }
    bubbleDown(i) {    
        let min = i, l = 2*i+1, r = 2*i+2;
        if(l < this.values.length && this.values[l][0] > this.values[min][0]) min = l;
        if(r < this.values.length && this.values[r][0] > this.values[min][0]) min = r;
        if(min != i) { 
            [this.values[i], this.values[min]] = [this.values[min], this.values[i]];    
            this.bubbleDown(min); 
        }
    }
}

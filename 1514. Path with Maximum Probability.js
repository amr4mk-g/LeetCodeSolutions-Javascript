class PriorityQueue {
    constructor() { this.items = []; }
    dequeue() { if (this.items.length) return this.items.pop(); }
    enqueue(item, priority) {
        let newItem = {value: item, priority: priority};       
        for (let i=0; i<this.items.length; i++) {
            if (this.items[i].priority > priority) {
                this.items.splice(i, 0, newItem);
                return;
            }
        }
        this.items.push(newItem);
    }
}

var maxProbability = function(n, edges, succProb, k, end) {
    let adjList = new Array(n).fill(0).map(()=>[]);
    for (let i=0; i<edges.length; i++) {
        adjList[edges[i][0]].push([edges[i][1], succProb[i]]);
        adjList[edges[i][1]].push([edges[i][0], succProb[i]]);
    }
    let pq = new PriorityQueue();             
    let list = new Array(n).fill(0);
    list[k] = 0;       
    pq.enqueue(k, 1); 
    while(pq.items.length) {
        let {value, priority} = pq.dequeue();
        if (value == end) return priority;
        for (let [v,c] of adjList[value]) {      
             let curr = priority * c;
             if(list[v] < curr) { 
               list[v] = curr;      
             pq.enqueue(v, curr); }
        }      
    }     
    return list[end]; 
}

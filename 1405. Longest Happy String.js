function longestDiverseString (a, b, c) {
    let n = a+b+c;
    let result = [];
    let pq = new PriorityQueue(); 
    if (a > 0) pq.enqueue('a', a);
    if (b > 0) pq.enqueue('b', b);
    if (c > 0) pq.enqueue('c', c);
    while (result.length < n) {
        let c = pq.dequeue();  // .value | .priority
        if (result[result.length-1] == result[result.length-2] && result[result.length-1] == c.value) {
            let c2 = pq.dequeue();
            if (c2 == undefined) break;
            pq.enqueue(c.value, c.priority); 
            c = c2;
        }
        result.push(c.value);
        if (c.priority > 1) pq.enqueue(c.value, c.priority-1);
    }
    return result.join('');
}

class PriorityQueue {
     constructor() { this.items = []; }
     dequeue() { return this.items.pop(); }
     enqueue(item, priority) {
          let next = {value: item, priority: priority}; 
          for(let i=0; i<this.items.length; i++) {
               if(this.items[i].priority >= next.priority) { 
                    this.items.splice(i, 0, next);     return; }
          }    this.items.push(next);
     }
}

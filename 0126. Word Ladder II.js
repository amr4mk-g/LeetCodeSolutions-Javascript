function findLadders (beginWord, endWord, wordList) {
    let dict = new Set(wordList);
    if (!dict.has(endWord)) return [];
    dict.delete(beginWord);
    let queue = [beginWord], nodes = [];
    let reached = false;    
    while (queue.length && !reached) {
        nodes.push(queue.slice());  
        let size = queue.length;
        for (let i=0; i<size && !reached; i++) {
            let from = queue.shift();
            for (let to of dict) {                
                if (!connected(from,to)) continue;
                if (to == endWord) { reached = true;  break; }
                queue.push(to);             
                dict.delete(to);              
            }
        }
    }
    if (!reached) return [];
    let res = [[endWord]];
    let n = nodes.length;
    for (let i=n-1; i>=0; i--) {        
        let n2 = res.length;
        for (let j=0; j<n2; j++) {
            let p = res.shift();          
            for (let word of nodes[i]) {                
                if (!connected(p[0], word)) continue;               
                res.push([word, ...p]);
            }
        }        
    }
    return res;
    
    function connected (a,b){
        let c = 0, n = a.length;
        for (let i=0; i<n && c<2; i++) if (a[i] != b[i]) c++;
        return c == 1;
    }
}

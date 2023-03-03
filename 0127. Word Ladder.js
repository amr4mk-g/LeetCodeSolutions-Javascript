function ladderLength (begin, end, wordList) {
    let adjList = {};  
    for (let word of wordList) {
        for (let i=0; i<word.length; i++) {
            let curr = word.slice(0,i)+'*'+word.slice(i+1);
            if (!adjList[curr]) adjList[curr] = [];
            adjList[curr].push(word);
        }
    }
    let queue = [[begin, 1]];
    let visited = {[begin]: true};
    while (queue.length) {
        let [word, step] = queue.shift()
        for (let i=0; i<word.length; i++) {
            let curr = word.slice(0,i)+'*'+word.slice(i+1);
            if (adjList[curr]) {
                for (let w of adjList[curr]) {
                    if (w == end) return step+1;
                    if (!visited[w]) {
                        visited[w] = true;
                        queue.push([w, step+1]);
                    }
                }
            }
        }
    }
    return 0
}

function wordBreak (s, wordDict) {
     let n = s.length;
     let set = new Set(wordDict), visited = new Set();
     let queue = [0];
     while (queue.length) {
        let start = queue.shift();
        if (!visited.has(start)) {
           for (let end =start+1; end<=n; end++) {
              if (set.has(s.slice(start, end))) {
                 if (end == n) return true;
                 queue.push(end);
              }
           }
           visited.add(start);
         }
       }
   return false;
}

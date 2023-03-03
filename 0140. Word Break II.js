function wordBreak (s, wordDict) {
    let n = s.length;
    if (n == 0) return [];
    let trie = Trie(wordDict);
    let curr = [], result = [];
    
    function recur (i, node){
       if (i == n && node.end) {
           result.push(curr.join(''));
           return;
        }
        let char = s[i];
        if (node[char]) {
            if (node[char].end) {
                if (i < n - 1) {
                    curr.push(char, ' ');
                    recur(i+1, trie);
                    curr.pop();  curr.pop();
                }
            }
            if (i < n) {
                curr.push(char);
                recur(i+1, node[char]);
                curr.pop();
            }
        }
    }
    recur(0, trie);
    return result;
    
    function Trie(list){
        let root = {}, node = root;
        for (let w of list) {
            for (let c of w) {
                if (!node[c]) node[c] = {};
                node = node[c];
            }
            node.end = true;
            node = root;
        }
        return root;
    }
}

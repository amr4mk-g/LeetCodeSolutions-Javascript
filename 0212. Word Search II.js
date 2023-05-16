function findWords (board, words) {
    let n = board.length, m = board[0].length;
    let res = [], trie = {};  //trie will be object of objects
    for (let w of words) {  //add every word as object in trie
        let curr = trie;
        for (let c of w) {
            if (!curr[c]) curr[c] = {};
            curr[c].count = curr[c].count+1 || 1;
            curr = curr[c];
        }
        curr.end = w;
    }
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {  //main trie object have first chars of words
            if (trie[board[r][c]]) exploreDFS(r, c, trie);
        }
    }
    return res;
    
    function exploreDFS(row, col, node) {
        if (row > n-1 || row < 0 || col > m-1 || col < 0) return;
        let char = board[row][col], curr = node[char];
        if (!curr) return;
        if (curr.end) {
            res.push(curr.end);
            curr.end = null;
        }
        board[row][col] = "";
        exploreDFS(row-1, col, curr); 
        exploreDFS(row+1, col, curr); 
        exploreDFS(row, col-1, curr); 
        exploreDFS(row, col+1, curr); 
        board[row][col] = char;
    }
}

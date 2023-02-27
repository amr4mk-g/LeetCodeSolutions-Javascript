function uniquePaths (m, n) {
    let track = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(-1));
    function dfs (row, col){
        if (row == m && col == n) return 1;
        if (row > m || col > n) return 0;
        if (track[row][col] == -1) {
            let right = dfs(row, col+1);
            let down = dfs(row+1, col);
            track[row][col] = right+down;
        }
        return track[row][col];
    }
    return dfs(1, 1);
}

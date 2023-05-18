function longestIncreasingPath (matrix) {  //O(n*m) - O(n*m)
    let n = matrix.length, m = matrix[0].length;
    let cache = [];
    let max = 0;
    for (let i=0; i<n; i++) cache.push(new Array(m).fill(-1));
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (cache[i][j] == -1) {
                let curr = dfs(i, j, -1);
                if (curr > max) max = curr;
            }
        }
    }
    return max;
    
    function dfs(i, j, prev) {
        if (i < 0 || i >= n || j < 0 || j >= m || matrix[i][j] <= prev) return 0;
        if (cache[i][j] != -1) return cache[i][j];
        let d1 = dfs(i+1, j, matrix[i][j])+1;
        let d2 = dfs(i-1, j, matrix[i][j])+1;
        let d3 = dfs(i, j+1, matrix[i][j])+1;
        let d4 = dfs(i, j-1, matrix[i][j])+1;
        let curr = Math.max(1, d1, d2, d3, d4);
        cache[i][j] = curr;
        return curr;
    }
}

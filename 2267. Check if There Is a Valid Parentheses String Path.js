function hasValidPath (grid) {
    let n = grid.length, m = grid[0].length;
    let visited = new Set();
    let cache = new Set();
    return dfs(0, 0, 0);
    
    function dfs(row, col, curr) {
        let val = grid[row][col] == "(" ? 1 : -1;
        let remain = 0 - (curr + val);
        if (cache.has(row+"_"+col+"_"+remain)) return false;
        if (curr + val < 0) return false;
        if (row == n-1 && col == m-1) return (curr+val == 0);
        visited.add(row+"_"+col);
        if (row+1 >= 0 && col >= 0 && row+1 < n && col < m) {
            if (!visited.has((row+1)+"_"+col)) 
               if (dfs(row+1, col, curr+val)) return true;
        }
        if (row >= 0 && col+1 >= 0 && row < n && col+1 < m) {
            if (!visited.has(row+"_"+(col+1)))
               if (dfs(row, col+1, curr+val)) return true;
        }
        visited.delete(row+"_"+col);
        cache.add(row+"_"+col+"_"+remain);
        return false;
    }
}

function closedIsland (grid) {
    let count = 0;
    function exploreDFS (row, col) {
        if (row > grid.length-1 || row < 0 || col > grid[0].length-1 || col < 0) return 0;
        if (grid[row][col] == 1) return 1;
        grid[row][col] = 1;
        let d1 = exploreDFS(row-1, col);
        let d2 = exploreDFS(row+1, col);
        let d3 = exploreDFS(row, col-1);
        let d4 = exploreDFS(row, col+1);
        return d1 && d2 && d3 && d4;
    }
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[0].length; c++) {
            if (grid[r][c] == 0) { count += exploreDFS(r, c); }
        }
    }
    return count;
}

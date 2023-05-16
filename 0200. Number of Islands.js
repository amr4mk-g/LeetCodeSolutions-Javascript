function numIslands (grid) {
    let count = 0;
    const exploreDFS = (row, col) => {
        if (row > grid.length-1 || row < 0 || col > grid[0].length-1 || col < 0) return 0;
        if (grid[row][col] == "0") return 0;
        grid[row][col] = "0";
        exploreDFS(row-1, col); 
        exploreDFS(row+1, col); 
        exploreDFS(row, col-1); 
        exploreDFS(row, col+1); 
    };
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[0].length; c++) {
            if (grid[r][c] == "1") { count++;  exploreDFS(r, c); }
        }
    }
    return count;
}

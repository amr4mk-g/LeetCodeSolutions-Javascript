function countSubIslands (grid1, grid2) {
    let count = 0;
    let exist = true;
    const exploreDFS = (row, col) => {
        if (row > grid2.length-1 || row < 0 || col > grid2[0].length-1 || col < 0) return 0;
        if (grid2[row][col] == 0) return 0;
        if (grid1[row][col] == 0) exist = false;
        grid2[row][col] = 0;
        exploreDFS(row-1, col); 
        exploreDFS(row+1, col); 
        exploreDFS(row, col-1); 
        exploreDFS(row, col+1); 
    };
    for (let r=0; r<grid2.length; r++) {
        for (let c=0; c<grid2[0].length; c++) {
            if (grid2[r][c] == 1) { 
                count++;  
                exist=true;  
                exploreDFS(r,c); 
                if (!exist) count--;                  
            }
        }
    }
    return count;
}

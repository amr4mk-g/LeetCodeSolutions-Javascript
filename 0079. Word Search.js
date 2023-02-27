function exist (grid, word) {
    let found = false;
    for (let r=0; r<grid.length; r++) {
          for (let c=0; c<grid[0].length; c++) {
               if (grid[r][c] == word[0]) { exploreDFS(r, c, 0); }
          }
     }  
    function exploreDFS (row, col, count) {
          if (count == word.length) { found=true; return; }
          if (row > grid.length-1 || row < 0 || col > grid[0].length-1 || col < 0) return;
          if (grid[row][col] != word[count] || found) return;
          let temp = grid[row][col];
          grid[row][col] = "";
          exploreDFS(row-1, col, count+1); 
          exploreDFS(row+1, col, count+1); 
          exploreDFS(row, col-1, count+1); 
          exploreDFS(row, col+1, count+1); 
          grid[row][col] = temp;
     }
     return found;
}

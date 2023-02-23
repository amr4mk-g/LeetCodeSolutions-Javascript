function containsCycle (grid) {
  let m = grid.length, n = grid[0].length;
  let seen = Array(m).fill(0).map(() => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!seen[i][j] && hasCycle(i, j, -1, -1)) { 
        return true;
      }
    }
  }
  return false;
  
  function hasCycle(row, col, prevRow, prevCol) {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    seen[row][col] = 1;
    for (let [x, y] of directions) {
      let newX = row + x, newY = col + y;
      if (newX < 0 || newX >= m || newY < 0 || newY >= n) continue; // out of bounds
      if (grid[newX][newY] !== grid[row][col] || (newX === prevRow && newY === prevCol)) continue;
      if (seen[newX][newY]) return true; 
      if (hasCycle(newX, newY, row, col)) return true; 
    }
    return false;
  }
}

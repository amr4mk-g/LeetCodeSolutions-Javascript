function minPathSum (grid) {
    if (!grid) return 0;
    let n = grid.length, m = grid[0].length;
    let res = [0];
    for (let i=0; i<n; i++){
        for (let j=0; j<m; j++){
            if (i == 0) res.push(res[j] + grid[i][j]);
            else if (j == 0) res[j+1] += grid[i][j];
            else { if (res[j] < res[j+1]) res[j+1] = res[j];
                res[j+1] += grid[i][j];
            }
        }
    }
    return res[m];
}

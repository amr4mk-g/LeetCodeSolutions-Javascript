function setZeroes (matrix) {
    let n = matrix.length, m = matrix[0].length;
    let row = new Set(), col = new Set();
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (matrix[i][j] == 0) { row.add(i); col.add(j); }
        }
    }
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (row.has(i) || col.has(j)) matrix[i][j] = 0;
        }
    }
}

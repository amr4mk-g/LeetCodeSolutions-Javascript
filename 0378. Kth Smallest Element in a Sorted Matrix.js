function kthSmallest (matrix, k) {
    let n = matrix.length, m = matrix[0].length;
    let left = matrix[0][0], right = matrix[n-1][m-1]; 
    while (left < right) {
        let mid = Math.floor((right+left)/2); 
        let count = 0;
        for (let i=0; i<n; i++) {
            for (let j=0; j<m; j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if (count < k) left = mid+1;
        else right = mid;
    }
    return left;
}

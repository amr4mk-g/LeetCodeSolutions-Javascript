function searchMatrix (matrix, v) {
    let n = matrix.length, m = matrix[0].length;
    let l = 0, r = n*m-1;
    while (l <= r) {
        let mid = Math.floor((l+r)/2);
        let x = matrix[Math.floor(mid/m)][mid%m];
        if (x == v) return true;
        if (x < v) l = mid+1;
        else r = mid-1;
    }
    return false;
}

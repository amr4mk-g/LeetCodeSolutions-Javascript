function searchInsert (arr, v) {
    let l = 0, r = arr.length-1, index = arr.length;
    while (l <= r) {
        let m = Math.floor((l+r)/2);
        if (arr[m] == v) return m;
        if (arr[m] < v) l = m+1;   
        else { r = m-1; index = m; }
    }
    return index;

}

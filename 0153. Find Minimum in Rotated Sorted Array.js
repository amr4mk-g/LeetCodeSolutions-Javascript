function findMin(arr) {
    let l = 0, r = arr.length-1;
    while (l < r) {
        let m = Math.floor((l+r)/2);
        if (arr[m] < arr[r]) r = m;
        else l = m+1;
    }
    return arr[l];
}

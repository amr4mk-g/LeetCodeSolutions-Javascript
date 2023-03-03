function findMin (arr) {
    let l = 0, r = arr.length-1;
    while (l < r) {
        let m = Math.floor((l+r)/2);
        if (arr[m] < arr[r]) r = m;
        else if (arr[m] == arr[r]) r--;
        else l = m+1;
    }
    return arr[l];
}

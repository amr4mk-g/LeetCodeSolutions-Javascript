function sortColors(arr) {
    let l = 0, r = arr.length-1;
    for (let i=0; i<=r; i++) {
        if (arr[i] == 0) {
            [arr[i], arr[l]] = [arr[l], arr[i]];
            l++;
        }
        else if (arr[i] == 2) {
            [arr[i], arr[r]] = [arr[r], arr[i]];
            i--;
            r--;
        }
    }
}

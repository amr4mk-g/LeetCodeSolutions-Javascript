function moveZeroes(arr) {
    let n = arr.length, j = 0;
    for (let i=0; i<n; i++) {
        if (arr[i] != 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
}

function findKthPositive (arr, k) {
    let count = 0, j = 0;
    for (let i=1; i<Infinity; i++) {
        if (arr[j] == i) j++;
        else {
            count++;
            if (count == k) return i;
        }
    }
}

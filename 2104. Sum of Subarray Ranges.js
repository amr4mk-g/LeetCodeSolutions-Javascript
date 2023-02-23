function subArrayRanges (arr) {
    let n = arr.length;
    let res = 0;
    for (let i=0; i<n; i++) {
        let min = arr[i], max = arr[i];
        for (let j=i; j<n; j++) {
            if (arr[j] < min) min = arr[j];
            if (arr[j] > max) max = arr[j];
            res += max-min;
        }
    }
    return res;
}

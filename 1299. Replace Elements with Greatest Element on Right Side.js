function replaceElements (arr) {
    let n = arr.length;
    let result = [];
    let max = -1;
    for (let i=n-1; i>=0; i--) {
        result[i] = max;
        if (arr[i] > max) max = arr[i];
    }
    return result;
}

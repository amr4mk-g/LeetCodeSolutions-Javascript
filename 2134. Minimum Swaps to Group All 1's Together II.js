function minSwaps (arr) {
    let n = arr.length, ones = 0;
    for (let v of arr) if (v == 1) ones++;
    let l=0, r=0, curr=0, min=ones;
    while (r < n+ones) {
        if (arr[r%n] == 1) curr++;
        if (r >= ones) {
            if (arr[l] == 1) curr--;
            if (ones-curr < min) min = ones-curr;
            l++;
        }
        r++;
    }
    return min;
}

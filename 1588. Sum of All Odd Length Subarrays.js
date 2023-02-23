function sumOddLengthSubarrays (arr) {
    let n = arr.length, res = 0;
    for (let l=0; l<n; l++) {
        let curr = 0;
        for (let r=l; r<n; r++) {
            curr += arr[r];
            if ((r-l+1) % 2 == 1) res += curr;
        }
    }
    return res;
}

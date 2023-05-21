function guessNumber (n) {
    let l = 1, r = n;
    while (l <= r) {
        let m = Math.floor((l+r)/2);
        if (guess(m) == 0) return m;
        else if (guess(m) == 1) l = m+1;
        else r = m-1;
    }
    return -1;
}

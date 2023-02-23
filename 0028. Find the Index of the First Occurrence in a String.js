function strStr (str, v) {
    if (!str || !v || str === v) return 0;
    let l = 0, r = 0;
    while (r < str.length) {
        if (str[r] == v[l]) {
            if (l == v.length-1) return r-l;
            l++;
        } else {
            r -= l;
            l = 0;
        }
        r++;
    }
    return -1;
}

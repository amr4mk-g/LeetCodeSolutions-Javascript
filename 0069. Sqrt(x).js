function mySqrt (x) {
    let l = 1, r = x;
    while (l <= r) {
        let m = Math.floor((l+r)/2);
        if (m*m > x) r = m-1;
        else if (m*m < x) l = m+1;
        else return m;
    }
    return r;
}  

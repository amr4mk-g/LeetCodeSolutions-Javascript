function reverse (x) {
    let s = [...String(x)];
    let l = 0, r = s.length-1;
    if (s[0] == '-') l++;
    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;  r--;
    }
    let re = parseInt(s.join(''));
    return (re <= 2**31 && re >= -(2**31))? re : 0;
}

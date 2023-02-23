function appealSum (s) {
    let n = s.length;
    let map = new Map(), result = 0;
    for (let i=0; i<n; i++) {
        map.set(s[i], i+1);
        for (let [k,v] of map) result += v;
    }
    return result;
}

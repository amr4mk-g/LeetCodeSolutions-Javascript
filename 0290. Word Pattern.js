function wordPattern (pat, str) {
    str = str.split(' ');
    let n = pat.length, m = str.length;
    if (n != m) return false;
    let map1 = new Map(), map2 = new Map();
    for (let i=0; i<n; i++) {
        let temp1 = map1.get(pat[i]), temp2 = map2.get(str[i]);
        if (temp1 != undefined) {
            if (temp1 != str[i]) return false;
        } else if (temp2 != undefined) {
            if (temp2 != pat[i]) return false;
        } else {
            map1.set(pat[i], str[i]);
            map2.set(str[i], pat[i]);
        }
    }
    return true;
}

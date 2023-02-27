function minWindow(s, t) {
    let ans = '';
    let map = new Map();
    for (let v of t) map.set(v, map.get(v)+1 || 1);
    let count = map.size;
    let l = 0, r = -1;    
    while (r < s.length) {
        if (count == 0) {
            if (!ans || r-l+1 < ans.length) ans = s.slice(l, r + 1);
            if (map.get(s[l]) != undefined) map.set(s[l], map.get(s[l])+1);
            if (map.get(s[l]) > 0) count++;
            l++;          
        } else {
            r++;
            if (map.get(s[r]) != undefined) map.set(s[r], map.get(s[r])-1);
            if (map.get(s[r]) == 0) count--;
        }
    }
    return ans;
}

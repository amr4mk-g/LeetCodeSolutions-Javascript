function lengthOfLongestSubstring (s) {
    let set = new Set();
    let l = 0, n = s.length;
    let max = 0;
    for (let r=0; r < n; r++) {
        while (set.has(s[r])) set.delete(s[l++]);
        set.add(s[r]);
        if (set.size > max) max = set.size;
    }
    return max;
}

function isSubsequence (s, t) {
    let found = 0;
    for (let i=0; i<t.length; i++) {
        if (found < s.length && t[i] == s[found]) found++;
    }
    return found == s.length;
}

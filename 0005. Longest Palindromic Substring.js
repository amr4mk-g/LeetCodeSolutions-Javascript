function longestPalindrome (s) {
    let n = s.length, result = "";
    for (let i=0; i<n; i++) {
        check(i, i); //odd
        check(i, i+1); //even
    }
    function check(l, r) {
        while (l >= 0 && r <= n) {
            if (s[l] == s[r]) {
                if (r-l+1 > result.length) result = s.slice(l, r+1);
                l--;  r++;
            } else break;
        }
    }
    return result;
}

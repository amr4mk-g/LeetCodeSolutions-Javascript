function numDistinct (s, t) {
    let n = s.length, m = t.length;
    let dp = new Array(m+1).fill(0);
    dp[0] = 1;
    for (let i=0; i<n; i++) {
        for (let j=m; j>=0; j--) {  
            if (s[i] == t[j]) dp[j+1] += dp[j];
        }
    }
    return dp[m];
}

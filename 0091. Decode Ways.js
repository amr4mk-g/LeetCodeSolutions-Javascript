function numDecodings (s){
    let n = s.length;
    let dp = new Array(n).fill(0);
    dp[n] = 1;
    for (let i=n-1; i>=0; i--) {
        if (s[i] == '0') dp[i] = 0;
        else dp[i] = dp[i+1];         
        if (i+1 < n) {
            let x = parseInt(s[i]+s[i+1]);
            if (x >= 10 && x <= 26) dp[i] += dp[i+2];
        }
    }
    return dp[0];
}

function longestValidParentheses (s) {
    if (!s.length) return 0; 
    let max = 0, n = s.length; 
    let open = 0, close = 0;
    for (let i=0; i<n; i++) {
        if (s[i] == '(') open++;
        else close++;
        if (open == close) { if (open*2 > max) max = open*2; }
        if (close > open) { open = 0;  close = 0; }
    }
    open = 0;  close = 0;
    for (let i=n-1; i>=0; i--) {
        if (s[i] == '(') open++;
        else close++;
        if (open == close) { if (open*2 > max) max = open*2; }
        if (close < open) { open = 0;  close = 0; }
    }
    return max;
}

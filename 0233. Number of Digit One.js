function countDigitOne (n) {
    let res = 0;
    for (let x=1; x<=n; x*=10) {
        let t = Math.floor(n / x), rem = n % x;
        res += Math.floor((t + 8) / 10) * x;
        if (t % 10 == 1) res += rem + 1;
    }
    return res;
}

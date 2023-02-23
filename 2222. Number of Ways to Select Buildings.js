function numberOfWays (s) {
    let n = s.length, result = 0;
    let ones = 0, zeros = 0;
    for (let i=0; i<n; i++) {
        if (s[i] == '0') zeros++; else ones++;
    }
    let lastOnes = 0, lastZeros = 0;
    for (let i=n-1; i>=0; i--) {
        if (s[i] == '0') {
            result += ones * lastOnes;
            zeros--;
            lastZeros++;
        } else {
            result += zeros * lastZeros;
            ones--;
            lastOnes++;
        }
    }
    return result;
}

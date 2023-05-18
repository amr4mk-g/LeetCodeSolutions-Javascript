function isPowerOfThree (n) {
    return Number.isInteger(Math.log10(n)/Math.log10(3));
}

function isPowerOfThree2 (n) {
    return n > 0 && 1162261467 % n == 0;
}

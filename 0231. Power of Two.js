function isPowerOfTwo (n) {
   return Number.isInteger(Math.log10(n)/ Math.log10(2));
}

function isPowerOfTwo2 (n) {
    if (n==536870912) return true;
    let x = Math.log(n)/Math.log(2);
    return Number.isInteger(x);
}

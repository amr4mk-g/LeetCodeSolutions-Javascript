function isPowerOfFour (n) {
   return Number.isInteger(Math.log10(n)/Math.log10(4));
}

function isPowerOfFour2 (n) {
   return n >=0 && Math.log2(n) % 2 === 0
}

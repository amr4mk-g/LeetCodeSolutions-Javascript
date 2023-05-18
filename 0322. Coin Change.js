function coinChange(coins, k) {
    let n = coins.length;
    let result = new Array(k+1).fill(Infinity);
    result[0] = 0;
    for (let c of coins) {
       for (let i=0; i<k+1; i++) {
          if (c <= i) result[i] = Math.min(result[i], result[i-c]+1);
      }
    }
    if (result[k] == Infinity) return -1;
    return result[k];
}

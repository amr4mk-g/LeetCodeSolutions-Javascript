function maxProfit (prices) {
    let len = prices.length;
    let max = 0;
    for (let i=0; i<len-1; i++) {
        if (prices[i+1] > prices[i]) max += prices[i+1] - prices[i];
    }
    return max;
}

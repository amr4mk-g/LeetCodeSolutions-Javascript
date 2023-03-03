function maxProfit (prices) {
    let n = prices.length;
    let buy1 = -Infinity, sell1 = 0;
    let buy2 = -Infinity, sell2 = 0;
    for (let v of prices) {
        sell2 = Math.max(sell2, buy2+v); 
        buy2 = Math.max(buy2, sell1-v);
        sell1 = Math.max(sell1, buy1+v);
        buy1 = Math.max(buy1, -v);
    }
    return sell2;
}

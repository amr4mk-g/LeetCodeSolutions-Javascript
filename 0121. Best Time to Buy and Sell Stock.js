function maxProfit (prices) {
    let buy = prices[0], profit = 0;
    for (let i=1; i<prices.length; i++) {
        if (prices[i]-buy > profit) profit = prices[i]-buy;
        if (prices[i] < buy) buy = prices[i];
    }
    return profit;
}

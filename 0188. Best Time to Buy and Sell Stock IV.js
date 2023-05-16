function maxProfit (k, prices) {
    let n = prices.length;
    if (n == 0) return 0;
    if (k > n/2){
        let profit = 0;
        for (let i=1; i<n; i++){
            let temp = prices[i] - prices[i-1];
            if (temp > 0) profit += temp;
        }
        return profit;
    }
    else {
        let dp = new Array(n).fill(0);
        for (let j=1; j<=k; j++){
            let min = prices[0], max = 0;
            for (let i=0; i<n; i++){
                min = Math.min(min, prices[i] - dp[i]);
                max = Math.max(max, prices[i] - min);
                dp[i] = max;
            }
        }
        return dp.pop();   
    }
}

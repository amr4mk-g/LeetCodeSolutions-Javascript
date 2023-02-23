function maxIceCream (costs, coins) {  //O(n + m) 
    let count = 0;
    let max = -Infinity;
    for (let v of costs) if (v > max) max = v;
    let freq = Array(max+1).fill(0);
    for (let v of costs) freq[v]++;
    for (let i=1; i<=max; i++) {
        if (!freq[i]) continue;
        if (coins < i) break;
        let temp = Math.min(freq[i], Math.floor(coins/i));
        coins -= i*temp;
        count += temp;
    }
    return count;
}

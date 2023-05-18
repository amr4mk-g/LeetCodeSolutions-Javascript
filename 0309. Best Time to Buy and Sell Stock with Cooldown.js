function maxProfit (prices) {
    var buy = Infinity;
    var free = 0, last = 0, now = 0;
    for (let v of prices) {
        now = Math.max(last, v-buy);
        buy = Math.min(buy, v-free);
        free = last;
        last = now;
    }
    return now;
}

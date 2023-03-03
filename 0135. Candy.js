function candy (ratings) {
    let n = ratings.length;
    let res = new Array(n).fill(1);
    for (let i=1; i<n; i++) {
        if (ratings[i] > ratings[i-1]) res[i] = res[i-1]+1;
    }
    for (let i=n-1; i>0; i--) {
        if (ratings[i-1] > ratings[i]) res[i-1] = Math.max(res[i]+1, res[i-1]);
    }
    let count = 0;
    for (let v of res) count += v;
    return count;
}

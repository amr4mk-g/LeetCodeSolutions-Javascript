function minCost (str, cost) {
    let n = str.length;
    let count = 0;
    for (let i=0; i<n; i++) {
        if (str[i] != str[i+1]) continue;
        let j = i+1;
        while (str[i] == str[j]) j++;
        let max = -Infinity;
        for (let k=i; k<j; k++) {
            count += cost[k];
            if (cost[k] > max) max = cost[k];
        }
        count -= max;
        i = j-1;
    }
    return count;
}

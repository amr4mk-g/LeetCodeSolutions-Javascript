function findTheWinner (n, k) {
    let arr = [];
    for (let i=1; i<=n; i++) arr.push(i);
    let i = 0, count = 0, remove = 0;
    while (arr.length != 1) {
        if (arr[i] != 0) count++;
        if (count == k) { arr[i] = 0;  remove++;  count = 0; }
        if (n-remove == 1) break;
        i++;
        i %= n;
    }
    for (let i=0; i<n; i++) if (arr[i] != 0) return arr[i];
    return 0;
}

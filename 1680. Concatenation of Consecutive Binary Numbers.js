function concatenatedBinary(n){
    let count = 0;
    for(let i = 1; i <= n; i++) {
        count *= (2**i.toString(2).length);
        count += i;
        count %= (10**9 + 7);
    }
    return count;
}

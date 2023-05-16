function countPrimes (n){
    let hash = new Array(n).fill(true);
    hash[0] = false;
    hash[1] = false;
    for (let i=2; i*i<n; i++) {
        if (hash[i]) for(let j=i*i;j<n;j+=i) hash[j] = false;
    }
    let count = 0;
    for (let v of hash) if (v) count++;
    return count;
}

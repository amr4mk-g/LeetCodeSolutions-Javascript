function maxCoins (piles) {
    piles.sort((a,b)=>(b-a));
    let n = piles.length;
    let res = 0;
    for (let i=1; i<n-(n/3); i+=2) {
        res += piles[i];
    }     
    return res;
}

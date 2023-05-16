function numSquares (n) {
    if (Math.floor(Math.sqrt(n))**2 == n) return 1;
    while (n%4 == 0) n /= 4 
    if (n%8 == 7) return 4;
    for (let i=0; i<=n; i++){
        let c = n- i*i;
        if (Math.floor(Math.sqrt(c))**2 == c) return 2;
    }  
    return 3; 
}

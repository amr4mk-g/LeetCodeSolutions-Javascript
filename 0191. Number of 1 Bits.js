function hammingWeight (n) {
    let one = 0;    
    while (n) {
        n &= (n-1);
        one++;
    }
    return one;
}

function trailingZeroes(n) {
    let count = 0;
    while (n != 0) {
        let x = (n/5)|0;
        count += x;
        n = x;
    }
    return count;
}

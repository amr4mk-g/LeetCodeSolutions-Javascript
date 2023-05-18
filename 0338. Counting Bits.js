function countBits (n) {
    let result = [];
    for (let i=0; i<=n; i++) {
        result.push(count(i));
    }
    return result;
    
    function count(x) {
        let count = 0;
        while (x) { x &= x-1;  count++; }
        return count;
    }
}

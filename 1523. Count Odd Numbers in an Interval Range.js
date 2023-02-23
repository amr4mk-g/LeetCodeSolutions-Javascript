function countOdds (low, high) {
    let count = high - low + 1;
    let result = Math.floor(count/2);
    if (low%2 != 0 && high%2 != 0)  
        return result+1;
    return result;
}

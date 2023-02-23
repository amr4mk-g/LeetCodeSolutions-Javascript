function arraySign (nums) {
    let neg = 0;
    for (let v of nums) {
        if (v == 0) return 0;
        if (v < 0) neg++;
    }
    if (neg % 2 == 0) return 1;
    return -1;
}

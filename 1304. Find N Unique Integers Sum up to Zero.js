function sumZero (n) {
    let result = [];
    if (n % 2 != 0) result.push(0);
    let v = 1;
    while (result.length != n) {
        result.push(v);
        result.push(-1 * v);
        v++;
    }
    return result;
}

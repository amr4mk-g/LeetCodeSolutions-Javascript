function runningSum (nums) {
    let sum = 0;
    let result = [];
    for (let v of nums) {
        sum += v;
        result.push(sum);
    }
    return result;
}

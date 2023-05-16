function missingNumber (nums) {
    let miss = 0, i = 0;
    for (let v of nums) miss += ++i - v;
    return miss;
}

function missingNumber2 (nums) {
    let sum = 0, i = 1;
    for (let v of nums) {
        sum += i-v;
        i++;
    }
    return sum;
}

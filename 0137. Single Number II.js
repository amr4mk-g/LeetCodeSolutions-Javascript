function singleNumber (nums) {
    let x = 0, y = 0;
    for (let v of nums) {
        x ^= v;
        x &= ~y;
        y ^= v;
        y &= ~x;
    }
    return x;
}

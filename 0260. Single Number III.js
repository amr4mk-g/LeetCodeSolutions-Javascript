function singleNumber (nums) {
    let x = 0;       
    for (let v of nums) x ^= v;
    x &= -x;
    let y = 0, z = 0;
    for (let v of nums) {
        if (x & v) y ^= v;
        else z ^= v;
    }
    return [y,z];
}

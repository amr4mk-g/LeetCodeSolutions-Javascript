function subtractProductAndSum (n) {
    let num = Array.from(String(n), Number);
    let pro = 1, sum = 0;
    for (let v of num) {
        pro *= v;
        sum += v;
    }
    return pro - sum;
}

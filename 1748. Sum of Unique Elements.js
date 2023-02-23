function sumOfUnique (nums) {
    let count = {}, sum = 0;
    for (let v of nums) {
        count[v] = ++count[v] || 1;
    }
    for (let v in count) {
        if (count[v] == 1) sum += parseInt(v);
    }
    return sum;
}

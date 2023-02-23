function minimumOperations (nums) {
    let set = new Set();
    for (let v of nums) if (v > 0) set.add(v);
    return set.size;
}

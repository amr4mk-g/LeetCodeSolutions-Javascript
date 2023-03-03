function singleNumber (nums) {
    let map = new Map();
    for (let v of nums) {
        if (map.get(v)) map.delete(v);
        else map.set(v, true);
    }
    for (let [k,v] of map) return k;
}

function uniqueOccurrences (arr) {
    let map = new Map();
    for (let v of arr) map.set(v, map.get(v)+1 || 1);
    let map2 = new Map();
    for (let [k,v] of map) {
        if (map2.get(v)) return false;
        else map2.set(v, true);
    }
    return true;
}

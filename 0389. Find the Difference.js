function findTheDifference (s, t) {
    let map = new Map();
    for (let c of t) {
        map.set(c, map.get(c)+1 || 1);
    }
    for (let c of s) {
        let x = map.get(c);
        if (x > 1) map.set(c, x-1);
        else map.delete(c);
    }
    for (let [k,v] of map) return k;
}

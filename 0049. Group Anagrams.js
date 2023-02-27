function groupAnagrams(strs) {
    let map = new Map();
    for (let s of strs) {
        let sort = [...s].sort().join('');
        let x = map.get(sort);
        if (x == undefined) map.set(sort, [s]);
        else map.set(sort, [...x, s]);
    }
    let result = [];
    for (let [k,v] of map) result.push(v);
    return result;
}

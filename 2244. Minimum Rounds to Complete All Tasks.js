function minimumRounds (tasks) {
    let map = new Map();
    for (let v of tasks) map.set(v, map.get(v)+1 || 1);
    let count = 0;
    for (let [k,v] of map) {
        if (v == 1) return -1;
        if (v%3 == 0) count += v/3;
        else count += ((v/3)|0) +1;
    }
    return count;
}

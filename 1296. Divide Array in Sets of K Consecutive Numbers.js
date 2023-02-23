function isPossibleDivide (arr, k) {
    let n = arr.length;
    if (n%k != 0) return false;
    arr.sort((a,b)=>(a-b));
    let map = new Map();
    for (let v of arr) map.set(v, map.get(v)+1 || 1);
    for (let v of arr) {
        if (map.get(v) <= 0 || map.get(v-1) > 0) continue;
        let curr = v, j = 0;
        while (j < k) {
            if (map.get(curr) > 0) {
                map.set(curr, map.get(curr)-1);
                curr++;
            } else return false;
            j++;
        }
    }
    return true;
}

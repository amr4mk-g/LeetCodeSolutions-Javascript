function maxOperations (nums, k) {
    let map = new Map(), count = 0;
    for (let n of nums) {
        let diff = k-n;
        if (map.get(diff) != undefined) {
            count++;
            if (map.get(diff) == 1) map.delete(diff);
            else map.set(diff, map.get(diff)-1);
        } else {
            map.set(n, map.get(n)+1 || 1);
        }
    }
    return count;
}

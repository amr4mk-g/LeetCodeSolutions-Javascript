function canConstruct (ransomNote, magazine) {
    let map = new Map();
    for (let c of magazine) {
        map.set(c, map.get(c)+1 || 1);
    }
    for (let c of ransomNote) {
        let x = map.get(c);
        if (x == undefined) return false;
        else {
            if (x > 1) map.set(c, x-1);
            else map.delete(c);
        }
    }
    return true;
}

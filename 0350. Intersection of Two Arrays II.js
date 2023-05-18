function intersect (nums1, nums2) {
    let map1 = new Map(), map2 = new Map();
    for (let v of nums1) map1.set(v, map1.get(v)+1 || 1);
    for (let v of nums2) map2.set(v, map2.get(v)+1 || 1);
    let result = [];
    for (let [k,v] of map1) {
        let v2 = map2.get(k);
        if (v2 != undefined) {
            let x = Math.min(v,v2);
            for (let i=0; i<x; i++) result.push(k);
        }
    }
    return result;
}

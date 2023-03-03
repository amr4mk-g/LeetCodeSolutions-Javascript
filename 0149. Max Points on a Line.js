function maxPoints (points) {  //O(n^2) , O(n)
    let n = points.length;
    if (n == 1) return 1;
    let count = 2;
    for (let i=0; i<n; i++) {
        let map = new Map();
        for (let j=0; j<n; j++) {
            if (j != i) {
                let v = Math.atan2(points[j][1]-points[i][1], points[j][0]-points[i][0]);
                map.set(v, map.get(v)+1 || 1);
            }
        }
        for (let [k,v] of map) if (v+1 > count) count = v+1;
    }
    return count;
}

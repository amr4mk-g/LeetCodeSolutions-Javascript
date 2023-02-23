 function minTime (n, edges, hasApple) {
    let result = 0;
    let map = new Map();
    for (let [u,v] of edges) {
        if (map.get(v) != undefined) map.set(u, v);
        else map.set(v, u);
    }
    for (let i=0; i<n; i++) {
        if (hasApple[i]) {
            let p = i;
            while (p != 0 && map.get(p) >= 0) {
                let t = map.get(p);
                map.set(p, -1);  //mark as visited
                p = t;
                result += 2;
            }
        }
    }
    return result;
}

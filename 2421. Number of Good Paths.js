function numberOfGoodPaths(vals, edges) {
    let n = vals.length;
    let res = n;
    let graph = new Array(n).fill(0).map(()=>[])
    for (let i=0; i<n-1; i++) {
        let [u, v] = edges[i];
        if (vals[u] > vals[v]) graph[u].push(v)
        else graph[v].push(u)
    }
    
    let f = new Array(n).fill(0).map((_, index)=>index)
    let count = vals.map((item)=>({[item]: 1}))
    let sortVals = vals.map((val, index)=>({val, index})).sort((a, b)=>a.val - b.val)

    function find(x){
        if (f[x] != x) f[x] = find(f[x]); 
        return f[x];
    }
       
    for (let {val, index} of sortVals) {
        let children = graph[index]; 
        let m = children.length;
        for (let i=0; i<m; i++) {
            let f1 = find(index)
            let c1 = count[f1][val] ?? 0;
            let f2 = find(children[i])
            let c2 = count[f2][val] ?? 0;
            res += c1 * c2;
            count[f1][val] = c1 + c2;
            f[f2] = f1;
        }
    } 
    return res;
}

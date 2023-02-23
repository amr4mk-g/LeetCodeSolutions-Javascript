function countSubTrees (n, edges, labels) {
    let adj = Array(n).fill(0).map(()=>[]);
    for (let [u,v] of edges) {
        adj[u].push(v);  adj[v].push(u);
    }
    let res = [];
    function DFS(node, parent) {
        let counts = new Map();
        for (let v of adj[node]) { //v is neighbor
            if (v == parent) continue;
            let sub = DFS(v, node);
            for (let [k,v] of sub) counts.set(k, (counts.get(k)||0) + v);
        }
        counts.set(labels[node], (counts.get(labels[node])||0) + 1);
        res[node] = counts.get(labels[node]);
        return counts;
    }
    DFS(0, -1);
    return res;
}

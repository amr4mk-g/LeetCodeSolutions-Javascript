function checkIfPrerequisite (numCourses, prerequisites, queries) {
    let adj = {}, set = {};
    for (let [u,v] of prerequisites) {
        if (!adj[u]) adj[u] = [];
        adj[u].push(v);
    }
    for (let k in adj) dfs(k);
    let res = [];
    for (let [u,v] of queries) {
        if (!set[u]) res.push(false);
        else res.push(set[u].has(v));
    }
    return res;
    
    function dfs(i) {
        if (set[i]) return set[i];
        set[i] = new Set();
        if (adj[i]) {
            for (let v of adj[i]) {
                set[i].add(v);
                dfs(v);
                for (let v2 of set[v]) set[i].add(v2);
            }
        }
    }
}

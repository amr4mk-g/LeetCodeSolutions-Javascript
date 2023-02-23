function longestPath (parent, str) {
    let n = parent.length, longPath = 0;
    let childs = Array(n).fill(0).map(()=>[]);
    for (let i=1; i<n; i++) childs[parent[i]].push(i);
    DFS(0);
    return longPath;

    function DFS(node) {
        let curr1 = 0, curr2 = 0;
        for (let v of childs[node]) {
            let lengChild = DFS(v);
            if (str[node] == str[v]) continue;
            if (curr1 < lengChild) {
                curr2 = curr1;
                curr1 = lengChild;
            } else if (curr2 < lengChild) curr2 = lengChild;
        }
        longPath = Math.max(longPath, curr1+curr2+1);
        return curr1+1;
    }
}

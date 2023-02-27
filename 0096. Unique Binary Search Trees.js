function numTrees (n) {
    let visited = [];
    function traverse (n) {
        if (n == 1) return 1
        if(visited[n]) return visited[n];
        let count = 0;
        for (let i=1; i<=n; i++) {
            let left = 1, rigth = 1;
            if (i > 1) left = traverse(i-1);
            if (i < n) rigth = traverse(n-i);
            count += left * rigth;
        }
        visited[n] = count;
        return count;
    }
    return traverse(n);
}

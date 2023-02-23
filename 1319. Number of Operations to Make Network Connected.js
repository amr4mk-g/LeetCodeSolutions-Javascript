function makeConnected (n, connections){
    if (connections.length < n-1) return -1;
    let map = {}, count = n; 
    for (let i=0; i<n; i++) map[i] = i;
    for (let [u, v] of connections) union(u, v); 
    return count-1;
    
    function find (n){
        while (n != map[n]) {
            map[n] = map[map[n]];
            n = map[n];
        }
        return n;
    }
    function union (n1, n2){
        let p1 = find(n1), p2 = find(n2);     
        if (p1 != p2) {
            map[p2] = p1;
            count--;
        }
    }
}

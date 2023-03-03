function cloneGraph(node) {
    if (!node) return node;
    let queue = [node], map = {};
    map[node.val] = new Node(node.val);
    while (queue.length) {
        let curr = queue.shift();
        for (let v of curr.neighbors) {
            if (!map[v.val]) {
                map[v.val] = new Node(v.val);
                queue.push(v);
            }
            map[curr.val].neighbors.push(map[v.val]);
        } 
    }
    return map[node.val];
}

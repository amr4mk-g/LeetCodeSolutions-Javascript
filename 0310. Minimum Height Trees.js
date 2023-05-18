function findMinHeightTrees (n, edges) {
	if (n == 1) return [0];
    let graph = [], indegree = [], result = [];
    for (let i=0; i<n; i++) {
        graph.push([]);
        indegree.push(0);
    }
	for (let [u, v] of edges) {
		graph[u].push(v);  // build graph
		graph[v].push(u);
		indegree[u]++;  // add indegree
		indegree[v]++;
	}
	for (let i=0; i<n; i++) {
		if (indegree[i] == 1) result.push(i); // add leaf nodes
	}
    // n odd (one middle node), n even (two middle nodes)
	while (n > 2) {
		let size = result.length;
		n -= size; // remove curr leaves
		for (let i=0; i<size; i++) {
			let item = result.shift();
			for (let node of graph[item]) {
				indegree[node]--;
				if (indegree[node] == 1) result.push(node);
			}
		}
	}
	return result;
}

function findOrder(n, prerequisites) {
    let inDegree = new Array(n).fill(0);
    let queue = [];
    let result = []; 
    for (let v of prerequisites) inDegree[v[0]]++;
    for (let i=0; i<n; i++) if (inDegree[i] == 0) queue.push(i);
    while (queue.length) {
        let curr = queue.pop();
        n--;
        result.push(curr);
        for (let [course, pre] of prerequisites) {
            if (curr == pre) {
                inDegree[course]--;
                if (inDegree[course] == 0) queue.push(course);
            }
        }
    }
    return (n == 0)? result:[];
}

function combine(n, k) {  //O(n^2)
    let result = [];
    function dfs(curr, start) {
        if(curr.length == k) { result.push(curr);  return; }
        for (let i=start; i<=n; i++) dfs([...curr, i], i+1);
    }
    dfs([], 1);
    return result;
}

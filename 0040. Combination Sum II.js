function combinationSum2(arr, k) {
    arr.sort((a,b)=>(a-b));
    let n = arr.length;
    let combos = [], map = {};
    for (let i=0; i<n; ++i) map[arr[i]] = i;
    dfs(k, [], 0);
    return combos;
  
    function dfs(k, curr, start) {
        if (k in map && start <= map[k]) combos.push([...curr, k]);
        let mid = Math.floor(k/2);
        for (let i=start; i < n && arr[i] <= mid; i++) {
            if (i > start && arr[i] == arr[i-1]) continue;
            dfs(k - arr[i], [...curr, arr[i]], i+1);
        }
    }
}

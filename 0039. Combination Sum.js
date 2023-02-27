function combinationSum(arr, k) {   //O(n^2)
     let n = arr.length, result = [];
     function dfs(remain, curr, start){
         if (remain < 0) return;            
         if (remain == 0) { result.push([...curr]); return; }
         for (let i=start; i<n; i++) dfs(remain - arr[i], [...curr, arr[i]], i);     
     }   
    dfs(k, [], 0);    
    return result;
}

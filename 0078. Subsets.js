function subsets (arr) {
     let result = [];       
     let n = arr.length;
     dfs([], 0);    
     return result;
  
     function dfs(curr, start) {
         result.push(curr);
         for (let i=start; i<n; i++) dfs([...curr, arr[i]], i+1);
     }
}

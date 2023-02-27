function permute (nums) {
    function dfs(arr, curr){
        if (!nums.length) res.push([...curr]);
        else {
            for(let i=0; i<arr.length; i++){
                let x = arr[i];
                curr.push(x);
                arr.splice(i,1);
                dfs(arr, curr);
                curr.pop();
                arr.splice(i,0,x);
            }
        }
    }
    let res = [];
    dfs(nums, []);
    return res;
}

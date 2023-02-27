function generateTrees (n) {
    function helper(arr){
        let n = arr.length;
        if (n == 0) return [null];
        if (n == 1) return [new TreeNode(arr[0])];
        let res = [];
        for (let i=0; i<n; i++) {
            let left = helper(arr.slice(0,i));
            let right = helper(arr.slice(i+1, n));
            for (let l=0; l<left.length; l++) {
                for (let r=0; r<right.length; r++) {
                    let node = new TreeNode(arr[i]);
                    node.left = left[l];
                    node.right = right[r];
                    res.push(node);
                }
            }
        }
        return res;
    }
    let arr = [];
    for (var i=1; i<=n; i++) arr.push(i);
    return helper(arr);
}

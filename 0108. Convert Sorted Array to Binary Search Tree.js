function sortedArrayToBST (arr) {
    function helper(l, r){
        if(l > r) return null;
        let mid = Math.floor((l+r)/2);
        let node = new TreeNode(arr[mid], helper(l, mid-1), helper(mid+1, r));
        return node;
    }
    return helper(0, arr.length-1);
}

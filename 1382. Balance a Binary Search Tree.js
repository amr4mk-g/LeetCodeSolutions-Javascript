var balanceBST = function(root) {
    let arr = BSTtoSortedArray(root);
    return sortedArrayToBST(arr);
};

var sortedArrayToBST = function(arr) {
    function helper(l, r){
        if(l > r) return null;
        let mid = Math.floor((l+r)/2);
        let node = new TreeNode(arr[mid], helper(l, mid-1), helper(mid+1, r));
        return node;
    }
    return helper(0, arr.length-1);
};

function BSTtoSortedArray(root) {
    let data = [];
    function traverse(node){
       if(!node) return;
       traverse(node.left);
       data.push(node.val);
       traverse(node.right);    
    }
    traverse(root);
    return data;
}

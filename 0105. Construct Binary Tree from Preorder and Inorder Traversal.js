function buildTree (preorder, inorder) {
    function dfs (left, right) {
        if (left > right) return null;
        let mid = inorder.indexOf(preorder.shift());
        let node = new TreeNode(inorder[mid]);
        node.left = dfs(left, mid-1);
        node.right = dfs(mid+1, right);
        return node;
    }
    return dfs(0, inorder.length-1);
}

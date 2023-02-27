function buildTree (inorder, postorder) {
    function dfs(start, end){
        if (start > end) return null;
        let mid = inorder.indexOf(postorder.pop());
        let root = new TreeNode(inorder[mid]);
        root.right = dfs(mid+1, end);
        root.left = dfs(start, mid-1);
        return root;
    }
    return dfs(0, inorder.length-1);
}

function lcaDeepestLeaves (root) {
    let depth = 0, result = null;
    dfs(root, 0);
    function dfs(node, curr) {
        if (!node) return curr-1;
        if (curr > depth) depth = curr;       
        let left = dfs(node.left, curr+1);
        let right = dfs(node.right, curr+1);  
        if (left == depth && right == depth) result = node;
        return Math.max(left, right);
    }
    return result;
}

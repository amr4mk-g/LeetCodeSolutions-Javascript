function goodNodes (root) {  // dfs preorder, O n - O h
    if (!root) return 0;
    let count = 0;
    function dfs(node, currMax) {
        if (!node) return;
        if (node.val >= currMax) { count++; currMax = node.val; }
        if (node.left || node.right) {
            dfs(node.left, currMax);
            dfs(node.right, currMax);
        }
    }
    dfs(root, root.val);
    return count;
}

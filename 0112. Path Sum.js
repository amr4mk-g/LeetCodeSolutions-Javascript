function hasPathSum (root, targetSum) {
    let sum = 0, result = false;
    function traverse(node) {
        if(!node) return;
        sum += node.val;
        if (!node.left && !node.right) {
            if (sum == targetSum) result = true;
        }
        traverse(node.left); traverse(node.right);
        sum -= node.val;
    }
    traverse(root);
    return result;
}

function maxPathSum (root) {
    let max = -Infinity;
    function traverse(root) {
        if (!root) return 0;
        let left = traverse(root.left);
        let right = traverse(root.right);
        max = Math.max(left+right+root.val, max);
        return Math.max(left+root.val, right+root.val, 0);
    }
    traverse(root);
    return max;
}

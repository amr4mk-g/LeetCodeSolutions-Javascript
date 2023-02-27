function maxDepth (root) {
    if (!root) return 0;
    let max = -Infinity;
    let depth = 0;
    function traverse (node) {
        if (!node) return;
        depth++;
        if (!node.left && !node.right) { 
             if (depth > max) max = depth;
        }
        traverse(node.left);
        traverse(node.right);
        depth--;
    }
    traverse(root);
    return max;
}

function maxDepth (root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right)+1;
}

function maxDepth (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) +1;
}

function lowestCommonAncestor (root, p, q) {
    if (!root || root == p || root == q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return (left)? left:right;
}

function lowestCommonAncestor2 (root, p, q) {
    function DFS(node) {
        if(!node) return null;
        if(node == p || node == q) return node;
        let left = DFS(node.left);
        let right = DFS(node.right);
        if(left && right) return node
        return left || right;
    }
    return DFS(root);
}

function lowestCommonAncestor (root, p, q) {
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

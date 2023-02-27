function isBalanced (root) {
    let balanced = true; 
    dfs(root);
    return balanced;
  
    function dfs(node) {
        if(!node) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        if (Math.abs(left-right) > 1) balanced = false;
        return 1 + Math.max(left, right); 
    }
}

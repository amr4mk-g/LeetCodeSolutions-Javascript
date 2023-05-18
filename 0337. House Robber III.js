function rob (root) {
    function dfs (node){
        if(!node) return [0,0];
        let left = dfs(node.left);
        let right = dfs(node.right);
        let withRoot = node.val + left[1] + right[1];
        let withoutRoot = Math.max(...left) + Math.max(...right);
        return [withRoot, withoutRoot];
    } 
    return Math.max(...dfs(root));
}

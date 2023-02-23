function pseudoPalindromicPaths (root) {
    function dfs(node) {
        if (!node) return;
        map[node.val] = map[node.val]+1 || 1;   
        let left = dfs(node.left);
        let right = dfs(node.right);     
        if (!left && !right) {
            let odd = 0;
            for (let k in map) {
                if (map[k]%2 != 0) odd++;
            }
            if (odd < 2) res++;
        }
        map[node.val] = map[node.val]-1;
        return true;
    }
    
    let res = 0, map = {};
    dfs(root);
    return res;
}

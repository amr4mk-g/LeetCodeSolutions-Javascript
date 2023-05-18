// using dfs pre order 
function serialize (root) {
    let res = [];
    function dfs(node) {
        if (!node) { res.push('N'); return; }
        res.push(String(node.val));
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return res.join('>');
}

function deserialize (data) {
    let res = data.split('>');
    let i = 0;
    function dfs() {
        if (res[i] == 'N') { i++; return null; }
        let node = new TreeNode(parseInt(res[i]));
        i++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    return dfs();
}

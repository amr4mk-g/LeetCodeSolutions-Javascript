function preorderTraversal (root) {
    let data = [];
    function traverse(node) {
        if(!node) return;
        data.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
   return data;
}

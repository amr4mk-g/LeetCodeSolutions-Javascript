function postorderTraversal (root) {
    let data = [];
    function traverse(node) {
        if(!node) return;
        traverse(node.left);
        traverse(node.right);
        data.push(node.val);
    }
    traverse(root);
   return data;
}

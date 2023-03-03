function sumNumbers (root) {
    let sum = 0, path = [];
    function traverse(node) {
        if(!node) return;
        path.push(node.val);
        if (!node.left && !node.right) sum += parseInt(path.join(''));
        traverse(node.left);
        traverse(node.right);
        path.pop();
    }
    traverse(root);
    return sum;
}

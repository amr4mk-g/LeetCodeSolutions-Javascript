function pathSum (root, targetSum) {
    let data = [], path = [], sum = 0;
    function traverse(node) {
        if(!node) return;
        path.push(node.val);
        sum += node.val;
        if (!node.left && !node.right) {
            if (sum == targetSum) data.push([...path]);
        }
        traverse(node.left);
        traverse(node.right);
        sum -= path.pop();
    }
    traverse(root);
    return data;
}

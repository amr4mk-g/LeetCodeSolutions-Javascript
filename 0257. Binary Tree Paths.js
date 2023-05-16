function binaryTreePaths (root) {
    let data = [];
    let path = [];
    function traverse(node) {
        if(!node) return;
        path.push(node.val);
        if (!node.left && !node.right) data.push(path.join("->"));
        else { traverse(node.left); traverse(node.right); }
        path.pop();
    }
    traverse(root);
    return data;
}

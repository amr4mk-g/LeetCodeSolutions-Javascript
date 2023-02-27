function isValidBST (root){
    if (!root) return true; 
    let stack = [[root, -Infinity, Infinity]];  
    while (stack.length) {
        let [node, left, right] = stack.pop();
        if (node.val <= left.val || node.val >= right.val) return false;
        if (node.right) stack.push([node.right, node, right]);
        if (node.left) stack.push([node.left, left, node]);
    } 
    return true;
}

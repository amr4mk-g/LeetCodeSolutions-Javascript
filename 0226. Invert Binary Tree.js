function invertTree (root) {
    if(!root) return root;
    let l = invertTree(root.left);
    let r = invertTree(root.right);
    root.left = r;
    root.right = l;
    return root;
}

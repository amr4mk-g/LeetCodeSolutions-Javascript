function inorderTraversal(root) {
  let data = [];
  function traverse(node) {
    if(node === null) return;
    traverse(node.left);
    data.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return data;
}

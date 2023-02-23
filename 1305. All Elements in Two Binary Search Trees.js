function getAllElements (root1, root2) {
    let data = [];
    function traverse(node) {
        if(!node) return;
        data.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root1);
    traverse(root2);
    return data.sort((a,b)=>(a-b));
}

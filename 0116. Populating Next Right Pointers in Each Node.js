function connect (root) {
    if (!root) return root;
    let queue = [root];
    while(queue.length) {
        let next = [];
        while(queue.length) {
            let node = queue.shift();
            node.next = queue[0] || null;
            if (node.left) {
                next.push(node.left);
                next.push(node.right);
            }
        }
        queue = next;
    }
    return root;
}

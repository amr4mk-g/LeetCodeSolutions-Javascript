function kthSmallest(root, k) {
    let stack = [];
    let curr = root, count = 0;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        count++;
        if (count == k) return curr.val;
        curr = curr?.right;
    }
}

function isSameTree (p, q) {
    let stack = [p, q];
    while (stack.length) {
        let q = stack.pop(), p = stack.pop();
        if (!p && !q) continue;
        if (!p || !q || p.val != q.val) return false;
        stack.push(p.left);
        stack.push(q.left);
        stack.push(p.right);
        stack.push(q.right);
    }
    return true;
}

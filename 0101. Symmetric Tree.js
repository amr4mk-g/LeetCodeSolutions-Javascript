function isSymmetric(root) {
    var s1 = [root], s2 = [root];
    while (s1.length || s2.length) {
        var n1 = s1.pop(), n2 = s2.pop();
        if (!n1 && !n2) continue;
        if (!n1 || !n2 || n1.val !== n2.val) return false;
        s1.push(n1.left);  s1.push(n1.right);
        s2.push(n2.right);  s2.push(n2.left);
    }
    return true;
}

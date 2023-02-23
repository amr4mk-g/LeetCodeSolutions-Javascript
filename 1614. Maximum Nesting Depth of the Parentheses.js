function maxDepth (s) {
    let open = 0, depth = 0;
    for (let c of s) {
        if (c == '(') {
            open++;
            if (open > depth) depth = open;
        } else if (c == ')') open--;
    }
    return depth;
}

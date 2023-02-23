function removeDuplicates (s, k) {
    let stack = []; // [char, count]
    for (let c of s) {
        if (!stack.length) stack.push([c,1]);
        else {
            let temp = stack.pop();
            if (temp[0] == c) {
                if (temp[1]+1 != k) stack.push([c, temp[1]+1]);
            } else {
                stack.push(temp);
                stack.push([c,1]);
            }
        }
    }
    let result = [];
    for (let [c,x] of stack) {
        for (let i=0; i<x; i++) result.push(c);
    }
    return result.join('');
}

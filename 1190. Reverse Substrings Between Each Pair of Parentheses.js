function reverseParentheses (s) {
    let stack = [];
    for (let c of s) {
        if (c != ')') stack.push(c);
        else {
            let curr = [];
            while (true) {
                let x = stack.pop();
                if (x != '(') curr.push(x);
                else {
                    for (let c2 of curr) stack.push(c2);
                    break;
                }
            }
        }
    }
    return stack.join('');
}

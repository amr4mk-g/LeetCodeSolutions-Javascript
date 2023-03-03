function evalRPN (tokens) {
    let stack = [];
    for (let v of tokens) {
        if (isNaN(v)) {
            let x = parseInt(stack.pop()); 
            let y = parseInt(stack.pop());
            if (v == '+') stack.push(y+x);
            if (v == '-') stack.push(y-x);
            if (v == '*') stack.push(y*x);
            if (v == '/') stack.push(Math.trunc(y/x));
        } else stack.push(v);
    }
    return stack.pop();
}

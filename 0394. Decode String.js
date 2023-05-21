function decodeString (s) {
    let stack = [], num = 0, res = '';
    for (let c of s) {
        if (!isNaN(c)) num = num*10 + parseInt(c);
        else if (c == '[') {
            stack.push(num, res);
            num = 0;  res = '';
        } else if (c == ']') res = stack.pop() + res.repeat(stack.pop());
        else res += c; 
    }
    return res;
}

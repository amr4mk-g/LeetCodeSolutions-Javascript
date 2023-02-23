function generateParenthesis (n) {
    let res = [];
    function generate(s, op, cl) {
        if (cl == n) res.push(s);
        else {
            if (op<n) generate(s+'(', op+1, cl);
            if (cl<op) generate(s+')', op, cl+1);
        }
    }
    generate("", 0, 0);
    return res;
}

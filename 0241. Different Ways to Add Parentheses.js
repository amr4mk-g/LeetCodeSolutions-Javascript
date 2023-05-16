function diffWaysToCompute (input) {    
    let res = [], n = input.length;
    for (let i=0; i<n; i++) {
        if (isNaN(input[i])) {
            let left = diffWaysToCompute(input.slice(0, i));
            let right = diffWaysToCompute(input.slice(i+1));
            for (let l of left) {
                for (let r of right) {
                    l = parseInt(l);
                    r = parseInt(r);
                    if (input[i] == '+') res.push(l + r);       
                    else if (input[i]=='-') res.push(l - r);
                    else res.push(l * r);
                }
            }
        }
    }
    if (res.length != 0) return res;
    return [input];
}

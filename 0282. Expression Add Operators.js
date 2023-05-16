function addOperators (num, k) {
    function helper(temp, pos, equal, prev) {
        if (pos == n) {
            if (equal == k) result.push(temp);
            return;
        }
        for (let i=pos; i<n; i++) {
            if (pos != i && num[pos] == '0') break;
            let n = parseInt(num.slice(pos, i+1));
            if (pos == 0) helper(""+n, i+1, n, n);
            else{
                helper(temp+"+"+n, i+1, equal+n, n);
                helper(temp+"-"+n, i+1, equal-n, -n);
                helper(temp+"*"+n, i+1, (equal-prev)+(n*prev), n*prev);
            }
        }
    }
    
    let n = num.length, result = [];
    helper("", 0, 0, 0);
    return result;
}

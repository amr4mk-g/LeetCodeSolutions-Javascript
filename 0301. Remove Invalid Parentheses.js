function removeInvalidParentheses(str) {
    if (!str.length) return [];
    let result = [];
    let queue = [str];
    let visited = new Set();
    visited.add(str);
    while (queue.length) {
        let curr = queue.shift();
        if (isValid(curr)) {
            if (result.length && result[result.length-1].length != curr.length) break;  
            result.push(curr);  
            continue;
        }
        for (let i=0; i<curr.length; i++) {
            if (curr[i] != '(' && curr[i] != ')') continue;
            let temp = curr.slice(0,i) + curr.slice(i+1)
            if (!visited.has(temp)) {
                queue.push(temp);  visited.add(temp);
            }
        }
    }
    return result;
    
    function isValid(str) {
        let open = 0;
        for (let c of str) {
            if (c == '(') open++;
            else if (c == ')') open--;
            if (open < 0) return false;
        }
        return (open == 0);
    }
}

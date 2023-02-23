function minRemoveToMakeValid (str) {
    let n = str.length;
    str = str.split("");
   	let stack = [];
    for (let i=0; i<n; i++){
        if (str[i] == '(') stack.push(i);
        else if (str[i] == ')') {
            if (stack.length) stack.pop();
            else str[i] = "";
        }
    }
    for (let ind of stack) str[ind] = "";  // remaining open (
    return str.join('');
}

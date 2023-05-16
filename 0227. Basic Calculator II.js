function calculate(s) {
    s = [...s].reverse();  
    let num = '', stack = [], sign = '+';
    while (s.length || num){
        let c = s.pop();
        if (c == ' ') continue;
        else if (!isNaN(c)) num += c;
        else {
            num = parseInt(num);
            if (sign == '+') stack.push(num);
            else if (sign == '-') stack.push(-num);
            else if (sign == '*') stack.push(stack.pop() * num);
            else if (sign == '/') stack.push((stack.pop() / num)|0);
            sign = c;
            num = '';
        } 
    }
    return stack.reduce((a,b)=>(a+b));
}

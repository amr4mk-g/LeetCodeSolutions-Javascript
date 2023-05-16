function calculate (s) {
  let num = 0, sign = 1, res = 0;
  let stack = [sign], n = s.length;
  for (let i=0; i<n; i++) {
    if (s[i] == ' ') continue;
    if (s[i] == '+' || s[i] == '-') {
      res += sign * num;
      sign = stack[stack.length-1] * (s[i] == '+' ? 1 : -1);
      num = 0;
    } else if (s[i] == '(') stack.push(sign);
    else if (s[i] == ')') stack.pop();
    else num = num*10 + parseInt(s[i]);
  }
  return res + (sign*num);
}

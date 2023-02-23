function isValid (s) {
      if (s.length==0 || s.length%2!=0) return false;
      let stack = [];
      for (let i of s) {
         if (i=='(' || i=='{' || i=='[') stack.push(i);
         else {
           let v = stack.pop();
           if (i==')' && v!='(') return false;
           else if (i=='}' && v!='{') return false;
           else if (i==']' && v!='[') return false;
         }
      }
      return stack.length==0;
}

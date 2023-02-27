function say (n) {
    let str = String(n);
    let curr = 1, result = "", c = str[0];
    for (let i=1; i<str.length; i++) {
       if (str[i] == c) { curr++; }
       else { result += curr+''+c; 
         c = str[i];  curr = 1; }
    }
    result += curr+''+c;
    return result;
}

function countAndSay (n) {
    let result = 1;
    for (let i=2; i<=n; i++) {
      result = say(result);
    }
   return String(result);
}

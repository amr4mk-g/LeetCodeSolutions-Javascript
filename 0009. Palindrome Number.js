function isPalindrome (x) {
      let s = String(x);
    for (let i=0; i<s.length/2; i++) {
      console.log( s[i] + " " + s[s.length-1-i]); 
      if (s[i] != s[s.length-1-i]) { return false; }
    }
    return true;
}

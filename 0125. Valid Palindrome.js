function isPalindrome(s) {
     s = s.toLowerCase().replace(/[\W_]+/g, '');
     let l = 0, r = s.length-1;
     while (l < r) {
         if (s[l] != s[r]) return false;
         l++;  r--;
    }
    return true;
}

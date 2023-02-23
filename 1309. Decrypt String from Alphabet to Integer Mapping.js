function freqAlphabets (s) {
    let r = "";
    for (let i=s.length-1; i>=0; i--) {  
       if (!isNaN(s[i])) {
         r = String.fromCharCode(96+parseInt(s[i]))+r;
       } else if (s[i] == '#') {
         r = String.fromCharCode(96+parseInt(s[i-2]+s[i-1]))+r;
         i-=2;
       }
    }
    return r;
}

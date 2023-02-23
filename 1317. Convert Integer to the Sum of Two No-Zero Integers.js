function getNoZeroIntegers (n) {
     for (let i=0; i<n; i++) {
       if (String(i).indexOf('0') == -1 
         && String(n-i).indexOf('0') == -1) 
       return [i, n-i];
    }
}

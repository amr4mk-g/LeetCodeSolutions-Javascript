function balancedStringSplit (s) {
   let res = 0, r = 0, l = 0;
    for (let i of s) {
        if (i == 'R') r++;
        else if (i == 'L') l++;
        if (r == l) {
          res++;
          r=0; l=0;
        }
    }
    return res;
}

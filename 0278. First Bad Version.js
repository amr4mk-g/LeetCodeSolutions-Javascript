function solution (isBadVersion) {
    return function(n) {
          let l = 1, r = n;
          while (l <= r) {
            let m = Math.floor((l+r)/2);
            if (!isBadVersion(m)) l = m+1;
            else r = m-1;
          }
          return l;
    };
}

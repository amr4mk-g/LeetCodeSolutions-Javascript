function isAnagram (s, t) {
    if(s.length != t.length) return false;
      let count = {};
      for (let v of [...t]) {
        count[v] = ++count[v] || 1;
      }
     for (let v of [...s]) {
         if (count[v] > 0) --count[v];
         else return false;
      }
    return true;
}

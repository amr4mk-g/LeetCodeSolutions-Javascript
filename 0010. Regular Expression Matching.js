function isMatch(s, p) {
  function dfs(i, j) {
    if (i >= s.length && j >= p.length) return true;
    if (j >= p.length) return false;
    let match = i < s.length && (s[i] == p[j] || p[j] == '.');
    if (j+1 < p.length && p[j+1] == '*') 
      return dfs(i, j+2) || (match && dfs(i+1, j));
    if (match) return dfs(i+1, j+1);
    return false;
  }
  return dfs(0, 0);
}

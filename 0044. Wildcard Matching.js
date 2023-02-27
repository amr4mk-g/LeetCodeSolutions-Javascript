function isMatch (s, p) {
  let n = s.length, m = p.length;
  let i = 0, j = 0, iLast = -1, jLast = -1;
  while (i < n) {
    if (j < m && p[j] == '*') { iLast = i; jLast = j++; }
    else if (j < m && (p[j] == '?' || p[j] == s[i])) { i++; j++; }
    else if (jLast != -1) { j = jLast+1; i = iLast; iLast++; }
    else return false;
  }
  while (j < m && p[j] == '*') j++;
  return (j == m);
}

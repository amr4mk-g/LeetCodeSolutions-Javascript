function myAtoi (s) {
  let i = 0, sign = 1, res = 0;
  let len = s.length;
  let max = (2**31)-1, min = -(2**31);
  while (s[i] == ' ') i++;  // spaces
  if (s[i] == '+' || s[i] == '-') { // sign
      if (s[i] == '-') sign = -1;
      i++;
  }
  while (s[i] >= '0' && s[i] <= '9') {
    res = (res*10) + (s[i]-0);
    i++;
  }
  res *= sign;
  if (res >= max) return max;
  if (res <= min) return min;
  return res;
}

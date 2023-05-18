function increasingTriplet (nums) {
  let i = Infinity, j = Infinity;  
  for (let k of nums) {
    if (k > i && k > j) return true;
    if (k > i) j = k;
    else i = k;
  }
  return false;
}

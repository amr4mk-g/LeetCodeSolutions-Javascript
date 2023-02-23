function divide (dividend, divisor) {
  if (!divisor || !dividend ) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  let isPositive = (dividend > 0 === divisor > 0) ? true : false
  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);
  let result = 0
  while (dividend >= divisor) {
   let count = 1;
   let base = divisor;
    while ( base <= (dividend >> 1) ) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }
  return isPositive?result:-result;
}

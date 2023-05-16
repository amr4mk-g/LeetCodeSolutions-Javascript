function addDigits (num) {
   let x = String(num).split('').reduce((a,b) => a+Number(b), 0);
   if (String(x).length == 1) return x;
   else return addDigits(x);
}

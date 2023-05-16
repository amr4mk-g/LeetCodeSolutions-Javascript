function rotate (nums, k) {
   if (k == 0) return nums;
   let n = nums.length; 
   if (k > n) k %= n;
   let t = nums.splice(k*-1);
   nums.unshift(...t);
}

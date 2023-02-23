function findClosestNumber (nums) {
   let max = 0;
    for (let i=1; i<nums.length; i++) {
      let x = Math.abs(nums[i]);
      let y = Math.abs(nums[max]);
      if (x == y && nums[i] > nums[max]) max=i;
      else if (x < y) max=i;;
    }
    return nums[max];
}

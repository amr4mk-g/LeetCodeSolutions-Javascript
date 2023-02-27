function permuteUnique(nums) {
   let res = [];
   function dfs(i) {
      let set = new Set();
      if (i == nums.length-1) res.push([...nums]);
      else {
         for (let j=i; j<nums.length; j++) {
            if (set.has(nums[j])) continue; 
            else set.add(nums[j]);
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i+1); 
            [nums[i], nums[j]] = [nums[j], nums[i]];
         }
      }
   }
   dfs(0);
   return res;
}

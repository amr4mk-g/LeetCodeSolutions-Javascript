function rearrangeArray (nums) {
   let pos=[], neg=[], res=[];
   for (let i=0; i<nums.length; i++) {
      if(nums[i]>0) pos.push(nums[i]);
      else neg.push(nums[i]);
   }
   for (let i=0; i<nums.length/2; i++) {
       res.push(pos[i]);
       res.push(neg[i]);
   }
   return res;
}

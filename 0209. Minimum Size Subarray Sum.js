function minSubArrayLen(k, nums) {
    let len = nums.length, min = Infinity;
    let curr = 0, left = 0;
    for (let right=0; right<len; right++) {
        curr += nums[right];
        while (curr >= k) { 
            let x = right-left+1;
            if (x < min) min = x; 
            curr -= nums[left];
            left++;
        }
    }
    if (min == Infinity) return 0;
    return min;
}

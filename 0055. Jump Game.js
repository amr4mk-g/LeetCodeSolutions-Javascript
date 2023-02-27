function canJump(nums) {
    let max = 0;
    for (let i=0; i<=max; i++) {
        if (i+nums[i] > max) max = i+nums[i];
        if (max >= nums.length-1) return true;
    }
    return false;
}

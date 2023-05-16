function productExceptSelf(nums) {
    let len = nums.length, curr = 1;
    let result = [];
    for (let i=0; i<len; i++) {
        result[i] = curr;
        curr *= nums[i];
    }
    curr = 1;
    for (let i=len-1; i>=0; i--) {
        result[i] *= curr;
        curr *= nums[i];
    }
    return result;
}

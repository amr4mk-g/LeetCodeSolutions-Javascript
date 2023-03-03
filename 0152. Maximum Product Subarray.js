function maxProduct (nums) {
    let result = nums[0];
    let currMax = 1, currMin = 1;
    for (let v of nums) {
        let temp = currMax;
        currMax = Math.max(v, v*currMax, v*currMin);
        currMin = Math.min(v, v*temp, v*currMin);
        result = Math.max(result, currMax);
    }
    return result;
}

function jump (nums) {
    let n = nums.length;
    let max = 0, lastMax = 0, count = 0;
    for (let i=0; i<n-1; i++){
        if (nums[i]+i > max) max = nums[i]+i;
        if (i == lastMax) { lastMax = max;  count++; }
    }
    return count;
}

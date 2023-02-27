function removeDuplicates (nums) {
    let n = nums.length, count = 0;
    for (let i=0; i<n; i++) {
        if (count < 2 || nums[i] > nums[count-2]) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
}

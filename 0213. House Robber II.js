function rob (nums) {
    let n = nums.length;
    if (n == 1) return nums[0];
    let h1 = helper(nums.slice(1,n));
    let h2 = helper(nums.slice(0,n-1));
    return Math.max(h1,h2);
}

function helper(nums) {
    let rob1 = 0, rob2 = 0;
    for (let v of nums) {
        let temp = Math.max(v+rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}

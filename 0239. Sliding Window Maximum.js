function maxSlidingWindow (nums, k) {
    let n = nums.length;
    let queue = [], result = [];
    for (let i=0; i<n; i++) {
        while (nums[i] >= nums[queue[queue.length-1]]) queue.pop();
        queue.push(i);
        if (queue[0] == i-k) queue.shift();
        if (i >= k-1) result.push(nums[queue[0]]);
    }
    return result;    
}

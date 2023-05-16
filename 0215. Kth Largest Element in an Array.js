function findKthLargest (nums, k) {
    let finalIdx = nums.length-k;
    let left = 0, right = nums.length-1;    
    while(left <= right) {       
        let pivot = right, pivotIdx = pivotHelper(pivot, left, right);
        if(pivotIdx === finalIdx) return nums[finalIdx];
        if(pivotIdx < finalIdx) left = pivotIdx + 1;
        else right = pivotIdx - 1;
    }
    
    function pivotHelper(pivot, start, end) {
        [nums[pivot], nums[end]] = [nums[end], nums[pivot]];
        let i = start, j = start;
        while(j < end) {
            if(nums[j] <= nums[end]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            } 
            j++;
        }
        [nums[i], nums[end]] = [nums[end], nums[i]];
        return i;
    }
}

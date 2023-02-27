function search(nums, v) {
    let l = 0, r = nums.length-1;
    while (l <= r) {
        let m = Math.floor((l+r)/2);
        if (nums[m] == v) return m;
        if (nums[l] < nums[m]) {
            if (nums[l] <= v && nums[m] > v) r = m-1;
            else l = m+1;
        } 
        else if (nums[l] > nums[m]) {
            if (nums[r] >= v && nums[m] < v) l = m+1;
            else r = m-1;
        } 
        else l++;
    }
    return -1;
}

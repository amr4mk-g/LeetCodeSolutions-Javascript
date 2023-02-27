function search(nums, v) {
    let l = 0, r = nums.length-1;
    while (l <= r) {
        let m = Math.floor((l+r)/2);
        if (nums[m] == v) return true;
        if (nums[m] > nums[l]) {
            if (nums[m] > v && nums[l] <= v) r = m-1;
            else l = m+1;
        } 
        else if (nums[m] < nums[l]) {
            if (nums[m] < v && nums[r] >= v) l = m+1;
            else r = m-1;
        } 
        else l++;
    }
    return false;
}

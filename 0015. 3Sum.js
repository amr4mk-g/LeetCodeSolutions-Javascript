function threeSum (nums) {  // O(N^2) - O(N)
    let n = nums.length, result = [];
    nums.sort((a,b) => (a-b));
    for (let i=0; i<n; i++){
        if (i > 0 && nums[i] == nums[i-1]) continue;
        let l = i+1, r = n-1;
        while (l < r){
            let curr = nums[i]+nums[l]+nums[r];
            if (curr > 0) r--;
            else if (curr < 0) l++;
            else {
                result.push( [nums[i], nums[l], nums[r]] );
                l++;
                while (l < r && nums[l] == nums[l-1]) l++;
            }
        }
    }
    return result;
}

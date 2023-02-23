function findMiddleIndex (nums) {
    let n = nums.length;
    let right = new Array(n), left = new Array(n), curr = 0;
    for (let i=0; i<n; i++) {
        left[i] = curr; 
        curr += nums[i]; 
    }
    curr = 0;
    for (let i=n-1; i>=0; i--) {
         right[i] = curr; 
         curr += nums[i]; 
    }
    for (let i=0; i<n; i++) {
        if (left[i] - right[i] == 0) return i;
    }
    return -1;
}

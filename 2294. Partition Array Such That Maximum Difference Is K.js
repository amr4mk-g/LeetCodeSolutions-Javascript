function partitionArray (nums, k) {
    nums.sort((a,b)=>(a-b));
    let res = 1, min = nums[0], max = nums[0];
    for (let v of nums) {
        if (v < min) min = v;
        if (v > max) max = v;
        if (max-min > k) {res++;  min = v;  max = v;}
    }
    return res;
}

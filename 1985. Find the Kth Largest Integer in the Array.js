function kthLargestNumber (nums, k) {
    nums.sort((a,b) => {
        let x = BigInt(a), y = BigInt(b);
        if (x > y) return -1;
        else if (x < y) return 1;
        else return 0;
    });
    return nums[k-1];
}

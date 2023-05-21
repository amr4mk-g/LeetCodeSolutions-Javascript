var Solution = function(nums) {
    this.nums = nums;
};

Solution.prototype.pick = function(target) {
    let n = this.nums.length;
    let count = 0, index = 0;
    for (let i=0; i<n; i++) {
        if (this.nums[i] == target) {
            count++;
            let reand = Math.floor(Math.random()*count+1);
            if (reand == count) index = i;
        }
    }
    return index;
};

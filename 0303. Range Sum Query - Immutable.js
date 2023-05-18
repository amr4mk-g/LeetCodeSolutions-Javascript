var NumArray = function(nums) {
    this.sum = [];
    let s = 0;
    for (let v of nums) {
        this.sum.push(s+v);
        s += v;
    }
};

NumArray.prototype.sumRange = function(left, right) {
    if (left==0)  return this.sum[right];
    return this.sum[right]-this.sum[left-1];
};

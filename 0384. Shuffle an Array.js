var Solution = function(nums) {
    this.arr = nums;
};

Solution.prototype.reset = function() {
    return this.arr;
};

Solution.prototype.shuffle = function() {
    let shuf = [...this.arr];
    let n = shuf.length;
    for (let i=0; i<n; i++) {
        let j = Math.floor(Math.random()*n);
        [shuf[i], shuf[j]] = [shuf[j], shuf[i]];
    }
    return shuf;
};

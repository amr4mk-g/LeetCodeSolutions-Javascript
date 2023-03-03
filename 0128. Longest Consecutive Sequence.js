function longestConsecutive (nums) {
    let set = new Set(nums);
    let max = 0;    
    for (let s of set){
        if (set.has(s-1)) continue;
        let count = 0;
        while (set.has(s++)) count++;
        if (count > max) max = count;
    }
    return max;
}

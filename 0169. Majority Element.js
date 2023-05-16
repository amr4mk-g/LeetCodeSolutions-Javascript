function majorityElement (nums) {
    let max = 0;
    let count = {};
    for (let v of nums) {
      count[v] = ++count[v] || 1;
      if (count[v] >= nums.length/2) max = v;
    }
    return max;
}

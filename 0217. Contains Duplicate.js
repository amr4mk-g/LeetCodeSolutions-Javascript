function containsDuplicate (nums) {
      let count = {};
      for (let v of nums) {
        count[v] = ++count[v] || 1;
      }
      for (let v in count) {
          if (count[v]>=2) {return true;}
      }
     return false;
}

function containsDuplicate2 (nums) {
    let set = new Set(nums);
    return nums.length != set.size;
}

function containsNearbyDuplicate (nums, k) {
    let map = new Map();
    for (let i=0; i<nums.length; i++) {
        if (map.get(nums[i]) == undefined) {
            map.set(nums[i], [i]);
        } else {
            let x = map.get(nums[i]);
            for (let j of x) {
                if (Math.abs(i-j) <= k) return true;
            }
            map.get(nums[i]).push(i);
        }
    }
    return false;
}

function countKDifference (nums, k) {
    const map = {};
    let ans = 0;
    for (const num of nums) {
        if (map[num-k]) {
            ans += map[num-k];
        }
        if (map[num+k]) {
            ans += map[num+k];
        }
        map[num] = map[num] ? map[num]+1 : 1;
    }
    return ans;
}

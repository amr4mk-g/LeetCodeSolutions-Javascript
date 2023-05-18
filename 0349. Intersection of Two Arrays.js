function intersection (nums1, nums2) {
    let set1 = new Set(nums1), set2 = new Set(nums2);
    let result = [];
    for (let v of set1) {
        if (set2.has(v)) result.push(v);
    }
    return result;
}

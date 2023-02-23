function findMedianSortedArrays (nums1, nums2) {
    let len1 = nums1.length, len2 = nums2.length;
    if(len1 > len2) return findMedianSortedArrays(nums2, nums1);
    let low = 0, high = len1;
    while(low <= high) {
        let cutX = Math.floor((low+high)/2);
        let cutY = Math.floor((len1+len2+1)/2) - cutX;
        
        let minX = (cutX == len1)? Infinity : nums1[cutX];
        let maxX = (cutX == 0)? -Infinity : nums1[cutX-1];
        let minY = (cutY == len2)? Infinity : nums2[cutY];
        let maxY = (cutY == 0)? -Infinity : nums2[cutY-1];

        if (maxX <= minY && maxY <= minX) {
            if((len1+len2) % 2 != 0) return Math.max(maxX, maxY);
            return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        } else if (maxX < minY) low = cutX + 1;
        else high = cutX - 1;
    }
}

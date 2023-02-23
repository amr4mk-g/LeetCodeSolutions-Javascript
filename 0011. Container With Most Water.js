function maxArea (height) {
    let len = height.length;
    let left = 0, right = len-1;
    let max = 0;
    while (left < right) {
       let curr = Math.min(height[left],height[right]) * (right-left);
       if (curr > max) max = curr;
       if (height[left] < height[right]) left++;
       else right--;
    }
    return max;
}

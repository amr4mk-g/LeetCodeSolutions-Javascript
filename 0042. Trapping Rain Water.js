function trap (height) {  //O(n) - O(1)
    let left = 0, right = height.length-1;
    let currMaxL = 0, currMaxR = 0, space = 0;
    while (left <= right) {
        if (currMaxL <= currMaxR) {
            if (height[left] > currMaxL) currMaxL = height[left];
            space += currMaxL - height[left];
            left++;
        } else {
            if (height[right] > currMaxR) currMaxR = height[right];
            space += currMaxR - height[right];
            right--;
        }
    }
    return space;
}
